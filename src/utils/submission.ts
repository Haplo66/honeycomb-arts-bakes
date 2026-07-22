import type { Order } from '../types/order';
import type { SubmissionResult } from '../types/submission';

/** Single integration point for the future external order handler. */
export const submitOrder = (order: Order): SubmissionResult => {
  if (!order || !Array.isArray(order.items) || order.items.length === 0) {
    return {
      success: false,
      error: 'Order is missing required item details.',
    };
  }

  const payload: Order = {
    items: order.items,
    customer: order.customer,
    createdAt: order.createdAt,
  };

  void payload;

  return {
    success: true,
    message: 'Order prepared for submission',
    orderId: 'temporary-id',
  };
};
