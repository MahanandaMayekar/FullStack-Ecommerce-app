import { StatusCodes } from "http-status-codes";
import {
  allOrdersService,
  placeOrderCODService,
  placeOrderRazorPayService,
  placeOrderStripeService,
  updateStatusService,
  usersOrdersService,
  verifyStripeService,
} from "../service/OrderService.js";
import { SuccessResponse } from "../utils/common/SuccessResponse.js";
import ClientError from "../utils/errors/ClientError.js";
import CustomError from "./../utils/errors/CustomError.js";
export const placeOrderCODController = async (req, res) => {
  try {
    //console.log("REQ.BODY",req.body);

    const orderObject = {
      userId: req.user?._id.toString(),
      products: req.body.orderData?.products,
      amount: req.body?.orderData?.amount,
      address: req.body?.orderData?.address,
      paymentMethod: "Cash on Delivery",
      payment: false,
    };
    const response = await placeOrderCODService(orderObject);
    return res
      .status(StatusCodes.CREATED)
      .json(SuccessResponse("Order created successfully", response));
  } catch (error) {
    console.log("err in creating order in controller", error);

    if (error instanceof ClientError || error instanceof CustomError) {
      return res.status(error.statusCode).json({
        success: false,
        message: error?.message?.message,
        explanation: error?.message?.explanation,
      });
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      error: error?.message?.explanation,
      data: {},
      message: "Internal server error",
    });
  }
};

export const usersOrderDetailsController = async (req, res) => {
  try {
    const userId = req.user;
    const response = await usersOrdersService(userId);
    return res
      .status(StatusCodes.OK)
      .json(
        SuccessResponse("successfully fetched users order details", response)
      );
  } catch (error) {
    console.log("Error in fetchting user order details", error);

    if (error instanceof ClientError || error instanceof CustomError) {
      return res.status(error.statusCode).json({
        success: false,
        message: error?.message?.message,
        explanation: error?.message?.explanation,
      });
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      error: error?.message?.explanation,
      data: {},
      message: "Internal server error",
    });
  }
};

export const adminOrderListController = async (req, res) => {
  try {
    const response = await allOrdersService();
    return res
      .status(StatusCodes.OK)
      .json(
        SuccessResponse("successfully fetched admins order details", response)
      );
  } catch (error) {
    console.log("Error in fetchting admin order details", error);

    if (error instanceof ClientError || error instanceof CustomError) {
      return res.status(error.statusCode).json({
        success: false,
        message: error?.message?.message,
        explanation: error?.message?.explanation,
      });
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      error: error?.message?.explanation,
      data: {},
      message: "Internal server error",
    });
  }
};

export const updateStatusController = async (req, res) => {
  try {
    const { orderId, status } = req.body;
    console.log("REQ.BODY IN UPDATE STATUS", req.body);

    const response = await updateStatusService(orderId, status);
    return res
      .status(StatusCodes.OK)
      .json(SuccessResponse("successfully updated status", response));
  } catch (error) {
    console.log("Error in updating status", error);

    if (error instanceof ClientError || error instanceof CustomError) {
      return res.status(error.statusCode).json({
        success: false,
        message: error?.message?.message,
        explanation: error?.message?.explanation,
      });
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      error: error?.message?.explanation,
      data: {},
      message: "Internal server error",
    });
  }
};

export const placeOrderStripeController = async (req, res) => {
  try {
    const user = req.user;
    const origin = req.headers?.origin;
    console.log("ORIGIN", origin);

    const orderObject = {
      userId: req.user?._id.toString(),
      products: req.body.orderData?.products,
      amount: req.body?.orderData?.amount,
      address: req.body?.orderData?.address,
      paymentMethod: "Stripe",
      payment: false,
    };

    // Call service layer to create order and get Stripe session URL
    const response = await placeOrderStripeService(orderObject, user, origin);

    return res
      .status(StatusCodes.CREATED)
      .json(
        SuccessResponse(
          "Stripe checkout session created successfully",
          response
        )
      );
  } catch (error) {
    console.error("Error in Stripe order controller:", error);

    return res
      .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
      .json({
        success: false,
        message: error.message || "Internal server error",
        explanation: error.explanation || "Error processing Stripe order",
      });
  }
};

export const verifyStripeController = async (req, res) => {
  try {
    const userId = req.user._id;
    const { orderId, success } = req.body;

    const response = await verifyStripeService({ orderId, userId, success });
    //console.log("rESPONSE",response);

    return res
      .status(StatusCodes.CREATED)
      .json(
        SuccessResponse("Successfully completed stripe verification", response)
      );
  } catch (error) {
    console.error("Error in Stripe verification controller:", error);

    return res
      .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
      .json({
        success: false,
        message: error.message || "Internal server error",
        explanation: error.explanation || "Error in Stripe verification",
      });
  }
};


export const placeOrderByRazorparController = async (req,res) => {
  try {
  
      const orderObject = {
        userId: req.user?._id.toString(),
        products: req.body.orderData?.products,
        amount: req.body?.orderData?.amount,
        address: req.body?.orderData?.address,
        paymentMethod: "RazorPay",
        payment: false,
    };
    const response = await placeOrderRazorPayService(orderObject);
    return res
      .status(StatusCodes.CREATED)
      .json(
        SuccessResponse(
          "Stripe checkout session created successfully",
          response
        )
      );
    
  } catch (error) {
    console.error("Error in Stripe verification controller:", error);

    return res
      .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
      .json({
        success: false,
        message: error.message || "Internal server error",
        explanation: error.explanation || "Error in placing order by razor pay",
      });
    
  }
}