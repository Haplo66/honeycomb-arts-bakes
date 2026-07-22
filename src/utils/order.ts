import type { Cart } from '../types/cart';
import type { Order } from '../types/order';

/** Converts the current cart into a checkout-ready order payload. */
export const createOrderFromCart = (cart: Cart): Order => ({
  items: cart.items.map((item) => ({
    productId: item.productId,
    collectionId: item.collectionId,
    productTitle: item.productTitle,
    quantity: item.quantity,
    configuration: item.configuration,
    notes: item.notes,
  })),
  customer: {},
  createdAt: new Date().toISOString(),
});
