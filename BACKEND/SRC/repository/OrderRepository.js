import { Order } from '../schema/OrderSchema'
import { CrudRepository } from './CrudRepository';
export const OrderRepository = {

    ...CrudRepository(Order),
    getOrderWithDetails: async (id) => {
        const Order = await Order.findById(id)
          .populate("userId", "name email ")
          .populate("products.productId", "name price description image");
        return Order
        
      }
    };
