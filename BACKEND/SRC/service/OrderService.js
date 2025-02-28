import { OrderRepository } from "../repository/OrderRepository.js";
import CustomError from "../utils/errors/CustomError.js";
import { StatusCodes } from "http-status-codes";
import { UserRepository } from "./../repository/UserRepository.js";

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
  } catch (error) {
    console.log("error in fetching all orders", error);
    throw new CustomError({
      message: error.message,
      explanation: "error in fetching all orders",
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
};

export const usersOrdersService = async () => {
  try {
  } catch (error) {
    console.log("error in fetching all orders of user", error);
    throw new CustomError({
      message: error.message,
      explanation: "error in fetching all orders of user",
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
};

export const updateStatusService = async () => {
  try {
  } catch (error) {
    console.log("error in updating status", error);
    throw new CustomError({
      message: error.message,
      explanation: "error in updating status",
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
};
