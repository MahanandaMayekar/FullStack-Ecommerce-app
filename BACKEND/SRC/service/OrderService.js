import { OrderRepository } from "../repository/OrderRepository.js";
import CustomError from "../utils/errors/CustomError.js";
import { StatusCodes } from "http-status-codes";
import { UserRepository } from "./../repository/UserRepository.js";
import { Order } from "../schema/OrderSchema.js";
import { STRIPE_SECRET_KEY } from "../config/serverConfig.js";
import Stripe from "stripe";
import instance from '../config/razorPayConfig.js';
const stripe = new Stripe(STRIPE_SECRET_KEY);
const DELIVERY_FEE = 10 * 100;

export const placeOrderCODService = async (orderObject) => {
  try {
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

export const placeOrderStripeService = async (orderData, user,origin) => {
  try {
    if (!orderData.userId) {
      throw new CustomError({
        message: "User ID is missing",
        explanation: "A valid user ID is required to place an order",
        statusCode: StatusCodes.BAD_REQUEST,
      });
    }

    const order = await OrderRepository.create(orderData);

    try {
      let lineItems = orderData.products.map((product) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: product.name,
            images: [product.image?.[0]],
          },
          unit_amount: product.price * 100, // Convert price to cents
        },
        quantity: product.quantity,
      }));
      lineItems.push({
        price_data: {
          currency: "usd",
          product_data: {
            name: "Delivery Charge",
          },
          unit_amount: DELIVERY_FEE, // Fixed delivery fee
        },
        quantity: 1,
      });
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"], // Accepts credit/debit cards
        mode: "payment", // One-time payment
        line_items: lineItems,
        success_url: `${origin}/verify?success=true&orderId=${order._id.toString()}`,
        cancel_url: `${origin}/verify?success=false&orderId=${order._id.toString()}`,
        customer_email: user?.email, // Prefill user's email
      });

      return {
        _id: order._id.toString(),
        userId: order.userId.toString(),
        products: order.products.map((product) => ({
          _id: product._id.toString(),
          name: product.name,
          price: product.price,
          size: product.size,
          quantity: product.quantity,
        })),
        amount: order.amount,
        address: JSON.parse(order.address), // Convert stringified address to JSON
        paymentMethod: order.paymentMethod,
        payment: order.payment,
        status: order.status,
        createdAt: order.createdAt,
        updatedAt: order.updatedAt,
        checkoutUrl: session.url, // Stripe Checkout URL
      };
    } catch (error) {
      console.error("Error in Stripe payment session:", error);
      throw new CustomError({
        message: "Stripe session creation failed",
        explanation: error.message,
        statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      });
    }
  } catch (error) {
    console.log("error in placing order by Stripe method", error);
    throw new CustomError({
      message: error?.message,
      explanation: "error in placing order by Stripe method",
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
};

export const verifyStripeService = async ({ orderId, userId, success }) => {
  try {
    if (success === "true") {
      const order=await OrderRepository.update(orderId, { payment: true });
      await await UserRepository.update(userId, {
        cartData: {},
      });
          
      return order
    }

    if (success === "false") {
      const order = await OrderRepository.deleteById(orderId)
      return order
    }
  } catch (error) {
    console.log("error in stripe verification", error);
    throw new CustomError({
      message: "error in stripe verification",
      explanation: "error in placing order by Stripe method",
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
  }


export const placeOrderRazorPayService = async (orderObject) => {
  try {
    if (!orderObject.userId) {
      throw new CustomError({
        message: "User ID is missing",
        explanation: "A valid user ID is required to place an order",
        statusCode: StatusCodes.BAD_REQUEST,
      });
    }

    const order = await OrderRepository.create(orderObject);
       if (!order) {
         throw new CustomError({
           message: "Failed to create order",
           explanation: "Database error while creating order",
           statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
         });
    }
      const amount = orderObject.amount;
      if (!amount || amount <= 0) {
        throw new CustomError({
          message: "Invalid order amount",
          explanation: "Amount must be greater than zero",
          statusCode: StatusCodes.BAD_REQUEST,
        });
      }
    const options = {
      amount: amount * 100, // Razorpay expects the amount in paise (1 INR = 100 paise)
      currency:"USD",
      receipt: order._id.toString(),
    };
    const razorpayOrder = await instance.orders.create(options)
    if (!razorpayOrder) {
      throw new CustomError({
        message: "failed to create razorpay order",
        explanation: "failed to create razorpay order",
        statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      });
      
    }
     //console.log("Razorpay Order Created:", razorpayOrder);

     return {
       razorpayOrder
     };
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
    return response;
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
    const orders = await Order.find({ userId: id }).sort({ createdAt: -1 });
    //console.log("THIS IS USERS ORDERS", orders);

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
