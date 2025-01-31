import { UserRepository } from '../repository/UserRepository.js';
import CustomError from '../utils/errors/CustomError.js';
import { StatusCodes } from 'http-status-codes';
import ClientError from '../utils/errors/ClientError.js';
import validator from 'validator';
export const RegisterUser = async (userData) => {
    try {
        const { email, password } = userData
         if (!validator.isEmail(email) ) {
            throw new ClientError("Invalid email format", StatusCodes.BAD_REQUEST)
            
        }
        if (!password || password.length < 8) {
            throw new ClientError("Password must be at least 8 characters long", StatusCodes.BAD_REQUEST)
            
        }
        const userExist =  await UserRepository.getByEmail(email)
        if (userExist) {
            throw new ClientError(" User with this email already exist",StatusCodes.BAD_REQUEST)
        }
        const newUser = await UserRepository.registerUser(userData)
        return newUser
        
    } catch (error) {
        console.log("Error in registering a new User", error);
        throw new CustomError("User registration failed",StatusCodes.INTERNAL_SERVER_ERROR,error.message)
        
        
        
    }
}
