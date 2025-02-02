import { StatusCodes } from "http-status-codes";
import { RegisterUser, UserLogin } from "../service/UserService.js";
import { SuccessResponse } from "../utils/common/SuccessResponse.js";
import CustomError from "../utils/errors/CustomError.js";
import ClientError from "../utils/errors/ClientError.js";


export const registerUserController = async (req, res) => {
  try {
    const user = await RegisterUser(req.body);
    return res
      .status(StatusCodes.CREATED)
      .json(SuccessResponse("User Created Successfully", user));
  } catch (error) {
    console.log("Error in registering user in controller", error);
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

export const userLoginController = async (req,res) => {
  try {
    const{email,password}=req.body
    const response = await UserLogin({email,password})
    console.log("response in controller login", response);
    
    return res.status(StatusCodes.OK).json(SuccessResponse("User signed in successfully",response))
    

  } catch (error) {
    console.log("user login failed at controller", error);
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
