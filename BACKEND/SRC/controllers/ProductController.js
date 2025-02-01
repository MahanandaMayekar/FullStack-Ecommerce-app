import { StatusCodes } from "http-status-codes";
import { addProductService } from "../service/ProductService.js";
import { SuccessResponse } from "./../utils/common/SuccessResponse.js";

export const addProductController = async (req, res) => {
  try {
    //console.log("req.body", req.body);

    const ProductResponse = await addProductService(req.body, req.files);
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
