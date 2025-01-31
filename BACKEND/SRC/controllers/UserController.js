import { StatusCodes } from 'http-status-codes';
import { RegisterUser } from '../service/UserService.js';
import { SuccessResponse } from '../utils/common/SuccessResponse.js';



export const registerUserController = async (req,res) => {
    try {
        const user = await RegisterUser(req.body)
        return res.status(StatusCodes.CREATED).json(SuccessResponse("User Created Successfully",user))
        
    } catch (error) {
        console.log("Error in registering user in controller",error);
        
        
    }
}