import { db } from '../firebase';
import {
  collection,
  addDoc,
  doc,
  writeBatch,
  serverTimestamp,
} from 'firebase/firestore';

/**
 * Creates a new order document in the top-level `orders` collection.
 * Returns the auto-generated Firestore document ID (order number).
 *
 * Firestore Security Rule needed:
 *   match /orders/{orderId} {
 *     allow create: if request.auth != null && request.resource.data.userId == request.auth.uid;
 *     allow read:   if request.auth != null && resource.data.userId == request.auth.uid;
 *   }
 */
export async function createOrder(uid, orderData) {
  const ref = await addDoc(collection(db, 'orders'), {
    userId:    uid,
    ...orderData,
    createdAt: serverTimestamp(),
  });
  return ref.id;
}

/**
 * Deletes every item in users/{uid}/cart/ using a single batch write.
 * Firestore batches are limited to 500 operations; for typical cart sizes
 * this is well within bounds.
 */
export async function clearUserCart(uid, cartItems) {
  if (!cartItems || cartItems.length === 0) return;
  const batch = writeBatch(db);
  cartItems.forEach((item) => {
    batch.delete(doc(db, 'users', uid, 'cart', item.id));
  });
  await batch.commit();
}
