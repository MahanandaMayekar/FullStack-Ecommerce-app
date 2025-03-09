import { StatusCodes } from "http-status-codes";
import {
  addProductService,
  deleteProductsService,
  fetchAllProductsService,
  findProductByIdService,
} from "../service/ProductService.js";
import ClientError from "../utils/errors/ClientError.js";
import CustomError from "../utils/errors/CustomError.js";
import { SuccessResponse } from "./../utils/common/SuccessResponse.js";

export const addProductController = async (req, res) => {
  try {
    //console.log("req.body", req.body);
    const ownerId = req.user._id;

    const ProductResponse = await addProductService(
      ownerId,
      req.body,
      req.files
    );
    return res
      .status(StatusCodes.CREATED)
      .json(SuccessResponse("Product created successfully", ProductResponse));
  } catch (error) {
    console.log("err in creating product in controller", error);

    if (error instanceof ClientError || error instanceof CustomError) {
      return res.status(error.statusCode).json({
        success: false,
        message: error.message,
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

export const fetchAllProductsController = async (req, res) => {
  try {
    const allProductsResponse = await fetchAllProductsService();
    return res
      .status(StatusCodes.OK)
      .json(
        SuccessResponse(
          "Successfully fetched all the products",
          allProductsResponse
        )
      );
  } catch (error) {
    console.log("err in fetching all products in controller", error);

    if (error instanceof ClientError || error instanceof CustomError) {
      return res.status(error.statusCode).json({
        success: false,
        message: error.message,
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

export const deleteProductsController = async (req, res) => {
  try {
    const deleteProductResponse = await deleteProductsService(
      req.params.productId
    );
    return res
      .status(StatusCodes.OK)
      .json(
        SuccessResponse(
          "Successfully deleted the products",
          deleteProductResponse
        )
      );
  } catch (error) {
    console.log("err in deleting product in controller", error);

    if (error instanceof ClientError || error instanceof CustomError) {
      return res.status(error.statusCode).json({
        success: false,
        message: error.message,
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

export const fetchProductByIdController = async (req, res) => {
  try {
    const productId = req.params.productId;
    const productResponse = await findProductByIdService(productId);
    return res
      .status(StatusCodes.OK)
      .json(
        SuccessResponse(
          "Successfully fetched the product by id ",
          productResponse
        )
      );
  } catch (error) {
    console.log("err in fetching product  by id  in controller", error);

    if (error instanceof ClientError || error instanceof CustomError) {
      return res.status(error.statusCode).json({
        success: false,
        message: error.message,
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
