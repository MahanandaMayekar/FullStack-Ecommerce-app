import { StatusCodes } from 'http-status-codes';
import { AddProductToCartService,GetUsersCartService,UpdateProducInCartService } from '../service/CartService.js';
import { SuccessResponse } from '../utils/common/SuccessResponse.js';
import ClientError from '../utils/errors/ClientError.js';
import CustomError from './../utils/errors/CustomError.js';

export const AddProductToCartController = async (req, res) => {
  try {
    const userId = req.user._id
    const{productId,size}=req.body
    const response = await AddProductToCartService({ userId, productId, size })
     return res
       .status(StatusCodes.CREATED)
       .json(SuccessResponse("Successfully added product to cart", response));
  } catch (error) {
    console.log("err in  adding product to cart", error);

    if (error instanceof ClientError || error instanceof CustomError) {
      return res.status(error.statusCode).json({
        success: false,
        message: error.message.message,
        explanation: error.explanation,
      });
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      error: error.message,
      data: {},
      message: "Internal server error",
    });
  }
  }


export const UpdateProducInCartController = async (req,res) => {
  try {
    const userId = req.user._id;
    const { productId, size,quantity } = req.body;
    const response = await UpdateProducInCartService({
      userId,
      productId,
      size,
      quantity,
    });
    return res
      .status(StatusCodes.CREATED)
      .json(
        SuccessResponse("Successfully updated quantity in cart", response)
      );
  } catch (error) {
    console.log("err in  updating quantity in cart", error);

    if (error instanceof ClientError || error instanceof CustomError) {
      return res.status(error.statusCode).json({
        success: false,
        message: error.message.message,
        explanation: error.explanation,
      });
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      error: error.message,
      data: {},
      message: "Internal server error",
    });
  }
};

export const GetUsersCartController = async (req,res) => {
  try {
    const userId = req.user._id;
    const response = await GetUsersCartService({ userId })
     return res
       .status(StatusCodes.CREATED)
       .json(SuccessResponse("Successfully fetched cart details", response));
  } catch (error) {
    console.log("err in  fetching cart details ", error);

    if (error instanceof ClientError || error instanceof CustomError) {
      return res.status(error.statusCode).json({
        success: false,
        message: error.message.message,
        explanation: error.explanation,
      });
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      error: error.message,
      data: {},
      message: "Internal server error",
    });
  }
  }

