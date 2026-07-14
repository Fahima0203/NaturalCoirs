import { db } from '../firebase';
import {
  doc,
  setDoc,
  deleteDoc,
  updateDoc,
  collection,
  onSnapshot,
} from 'firebase/firestore';

// Firestore path: users/{uid}/cart/{itemId}
const cartCol = (uid) => collection(db, 'users', uid, 'cart');
const cartDoc = (uid, id) => doc(db, 'users', uid, 'cart', id);

/**
 * Create a deterministic, Firestore-safe document ID from section + product name.
 */
export function makeItemId(section, name) {
  return `${section}__${name}`.replace(/[^a-zA-Z0-9_-]/g, '_');
}

/**
 * Real-time listener for the user's cart.
 * Returns the unsubscribe function.
 */
export function subscribeToCart(uid, onChange, onError) {
  return onSnapshot(
    cartCol(uid),
    (snap) => {
      const items = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      onChange(items);
    },
    onError
  );
}

/**
 * Write (or fully overwrite) a cart item.
 */
export async function upsertCartItem(uid, item) {
  await setDoc(cartDoc(uid, item.id), item);
}

/**
 * Delete a cart item.
 */
export async function removeCartItem(uid, itemId) {
  await deleteDoc(cartDoc(uid, itemId));
}

/**
 * Update only the quantity field of an existing cart item.
 */
export async function updateCartQty(uid, itemId, quantity) {
  await updateDoc(cartDoc(uid, itemId), { quantity });
}
