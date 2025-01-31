import { UserRepository } from "../repository/UserRepository.js";
import CustomError from "../utils/errors/CustomError.js";
import { StatusCodes } from "http-status-codes";
import ClientError from "../utils/errors/ClientError.js";
import validator from "validator";
export const RegisterUser = async (userData) => {
  try {
    const { email, password } = userData;
    if (!validator.isEmail(email)) {
      throw new ClientError({
        message: "Invalid email format",
        explanation: "Invalid data sent by user",
        statusCode: StatusCodes.BAD_REQUEST,
      });
    }
    if (!password || password.length < 8) {
      throw new ClientError({
        message: "Password must be at least 8 characters long",
        explanation: "Invalid data sent by user",
        statusCode: StatusCodes.BAD_REQUEST,
      });
    }
    const userExist = await UserRepository.getByEmail(email);
    if (userExist) {
      throw new ClientError({
        message: " User with this email already exist",
        explanation: "Invalid data sent by user",
        statusCode: StatusCodes.BAD_REQUEST,
      });
    }
    const newUser = await UserRepository.registerUser(userData);
    return newUser;
  } catch (error) {
    console.log("Error in registering a new User", error);
    throw new CustomError({
      message: error.message,
      explanation: "User registration failed",
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
};
