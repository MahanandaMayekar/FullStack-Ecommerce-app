import { StatusCodes } from "http-status-codes";
import { allOrdersService, placeOrderCODService, usersOrdersService } from "../service/OrderService.js";
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

export const usersOrderDetailsController = async (req,res) => {
  try {
    const userId=req.user
    const response = await usersOrdersService(userId);
    return res
      .status(StatusCodes.OK)
      .json(SuccessResponse("successfully fetched users order details", response));
    
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
}

export const adminOrderListController = async (req,res) => {
  try {
    const response = await allOrdersService()
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
}