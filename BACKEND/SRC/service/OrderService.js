import { OrderRepository } from "../repository/OrderRepository.js";
import CustomError from "../utils/errors/CustomError.js";
import { StatusCodes } from "http-status-codes";
import { UserRepository } from "./../repository/UserRepository.js";
import { Order } from "../schema/OrderSchema.js";

export const placeOrderCODService = async (orderObject) => {
  try {
    //console.log("orderObj", orderObject);

    if (!orderObject.userId) {
      throw new CustomError({
        message: "User ID is missing",
        explanation: "A valid user ID is required to place an order",
        statusCode: StatusCodes.BAD_REQUEST,
      });
    }

    const order = await OrderRepository.create(orderObject);

    await UserRepository.update(orderObject.userId, {
      cartData: {},
    });

    return order;
  } catch (error) {
    console.error("Error in placing order by COD method:", error);
    throw new CustomError({
      message: error.message,
      explanation: "Error in placing order by COD method",
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
};

export const placeOrderStripeService = async () => {
  try {
  } catch (error) {
    console.log("error in placing order by Stripe method", error);
    throw new CustomError({
      message: error?.message,
      explanation: "error in placing order by Stripe method",
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
};

export const placeOrderRazorPayService = async () => {
  try {
  } catch (error) {
    console.log("error in placing order by RazorPay method", error);
    throw new CustomError({
      message: error.message,
      explanation: "error in placing order by RazorPay method",
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
};

//for admin
export const allOrdersService = async () => {
  try {
    const response = await Order.find().sort({ createdAt: -1 });
    return response
  } catch (error) {
    console.log("error in fetching all orders", error);
    throw new CustomError({
      message: error.message,
      explanation: "error in fetching all orders",
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
};

export const usersOrdersService = async (id) => {
  try {
    if (!id) {
      throw new Error("users id not found");
    }
    const orders = await Order.find({ userId: id }).sort({ createdAt: -1 })
    console.log("THIS IS USERS ORDERS", orders);

    return orders;
  } catch (error) {
    console.log("error in fetching all orders of user", error);
    throw new CustomError({
      message: error.message,
      explanation: "error in fetching all orders of user",
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
};

export const updateStatusService = async (orderId, status) => {
  try {
    if (!status) {
      throw new CustomError({
        message: "Status is missing",
        explanation: "A valid status is required to update the order",
        statusCode: StatusCodes.BAD_REQUEST,
      });
    }

    if (!orderId) {
      throw new CustomError({
        message: "Order ID is missing",
        explanation: "A valid order ID is required to update the order status",
        statusCode: StatusCodes.BAD_REQUEST,
      });
    }

    const order = await Order.findById(orderId);
    if (!order) {
      throw new CustomError({
        message: "Order not found",
        explanation: "No order exists with the provided ID",
        statusCode: StatusCodes.NOT_FOUND,
      });
    }

    const updatedOrder = await OrderRepository.update(orderId, { status });

    return updatedOrder;
  } catch (error) {
    console.error("Error in updating status:", error);
    throw new CustomError({
      message: error.message || "Failed to update status",
      explanation: "An error occurred while updating the order status",
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
};