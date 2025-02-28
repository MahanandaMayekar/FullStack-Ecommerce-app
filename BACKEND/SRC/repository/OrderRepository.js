import { Order } from '../schema/OrderSchema.js'
import { CrudRepository } from './CrudRepository.js';
export const OrderRepository = {

  ...CrudRepository(Order),
  getOrderWithDetails: async (id) => {
    const Order = await Order.findById(id)
      .populate("userId", "name email ")
      .populate("products.productId", "name price description image");
    return Order
  },
}