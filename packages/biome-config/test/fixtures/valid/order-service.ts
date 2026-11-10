import debounce from 'lodash/debounce';

export interface Order {
  id: string;
  items: string[];
  total: number;
}

const ORDER_ID_PATTERN = /^ord_[a-z0-9]+$/;

export class OrderError extends Error {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
    this.name = 'OrderError';
  }
}

export function assertOrderId(id: string): void {
  if (!ORDER_ID_PATTERN.test(id)) {
    throw new OrderError(`Invalid order id: ${id}`);
  }
}

export function sumTotals(orders: Order[]): number {
  let total = 0;

  for (const order of orders) {
    total += order.total;
  }

  return total;
}

export async function loadOrders(ids: string[], fetchOrder: (id: string) => Promise<Order>): Promise<Order[]> {
  return await Promise.all(ids.map(id => fetchOrder(id)));
}

export const logOrderCount = debounce((orders: Order[]) => orders.length, 100);
