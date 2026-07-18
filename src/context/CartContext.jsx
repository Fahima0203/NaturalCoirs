import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { useAuth } from './AuthContext';
import {
  subscribeToCart,
  upsertCartItem,
  removeCartItem,
  updateCartQty,
  makeItemId,
} from '../services/cartService';

const CartContext = createContext(null);

export function useCart() {
  return useContext(CartContext);
}

/** Extract the numeric portion from a price string like "₹ 28/kg" → 28 */
function parsePriceValue(priceStr) {
  if (!priceStr) return 0;
  const m = priceStr.match(/[\d.]+/);
  return m ? parseFloat(m[0]) : 0;
}

export function CartProvider({ children }) {
  const { currentUser } = useAuth();
  const [cartItems, setCartItems]   = useState([]);
  const [cartLoading, setCartLoading] = useState(false);
  const [cartError, setCartError]   = useState(null);

  // ── Subscribe to Firestore cart whenever the logged-in user changes ──────
  useEffect(() => {
    if (!currentUser) {
      setCartItems([]);
      return;
    }
    setCartLoading(true);
    const unsubscribe = subscribeToCart(
      currentUser.uid,
      (items) => {
        setCartItems(items);
        setCartLoading(false);
        setCartError(null);
      },
      (err) => {
        console.error('Cart sync error:', err);
        setCartError('Unable to load cart. Please try again.');
        setCartLoading(false);
      }
    );
    return unsubscribe;
  }, [currentUser]);

  // ── Add (or increment) an item ────────────────────────────────────────────
  const addToCart = useCallback(
    async (section, name, priceStr, qty = 1) => {
      if (!currentUser) return;
      const id       = makeItemId(section, name);
      const existing = cartItems.find((i) => i.id === id);
      const item = {
        id,
        section,
        name,
        price:      priceStr || 'Contact for price',
        priceValue: parsePriceValue(priceStr),
        quantity:   existing ? existing.quantity + qty : qty,
      };
      await upsertCartItem(currentUser.uid, item);
    },
    [currentUser, cartItems]
  );

  // ── Remove an item ────────────────────────────────────────────────────────
  const removeFromCart = useCallback(
    async (itemId) => {
      if (!currentUser) return;
      await removeCartItem(currentUser.uid, itemId);
    },
    [currentUser]
  );

  // ── Set quantity for an existing item ─────────────────────────────────────
  const updateQuantity = useCallback(
    async (itemId, quantity) => {
      if (!currentUser) return;
      // If requested quantity is less than 1, remove the item using the
      // centralized remove function so behavior stays consistent.
      if (quantity < 1) {
        await removeFromCart(itemId);
        return;
      }
      await updateCartQty(currentUser.uid, itemId, quantity);
    },
    [currentUser, removeFromCart]
  );

  const totalItems = cartItems.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, i) => sum + i.priceValue * i.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartLoading,
        cartError,
        addToCart,
        updateQuantity,
        removeFromCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
