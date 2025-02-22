import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/serverConfig.js";
import { UserRepository } from "../repository/UserRepository.js";
import ClientError from "./../utils/errors/ClientError.js";


export const AuthMiddleware = async (req, res, next) => {
  try {
    const Token = req.headers["x-access-token"];
    if (!Token) {
      throw new ClientError({
        message: "No auth Token is provided",
        explanation: "Token is missing",
        statusCode: StatusCodes.FORBIDDEN,
      });
    }

    const isTokenValid = jwt.verify(Token, JWT_SECRET);
    if (!isTokenValid) {
      throw new ClientError({
        message: "Invalid authentication token",
        explanation: "Token verification failed",
        statusCode: StatusCodes.FORBIDDEN,
      });
    }
    console.log("token", isTokenValid, "&&&", isTokenValid.id);

    const user = await UserRepository.findById(isTokenValid.id);
    if (!user) {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        success: false,
        message: "User not found",
        explanation: "The user associated with this token does not exist",
      });
    }

       req.user = user;
    next();
  } catch (error) {
    console.log("error in auth admin middleware", error.message);
    if (
      error instanceof ClientError ||
      error.name === "JsonWebTokenError" ||
      error.name === "TokenExpiredError"
    ) {
      return res.status(error.statusCode || StatusCodes.BAD_REQUEST).json({
        success: false,
        message: error.message.message,
        explanation: error.message.explanation || " something went wrong ",
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
