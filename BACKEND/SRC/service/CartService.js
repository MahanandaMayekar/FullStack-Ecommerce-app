
import { productRepository } from '../repository/ProductRepository.js';
import ClientError from '../utils/errors/ClientError.js';
import CustomError from '../utils/errors/CustomError.js';
import { UserRepository } from './../repository/UserRepository.js';



export const AddProductToCartService = async ({ userId, productId, size }) => {
    try {
        const user = await UserRepository.findById(userId)
        if (!user) {
            throw new ClientError({
              message: " productId is required",
              explanation: "productId not found",
              statusCode: StatusCodes.BAD_REQUEST,
            });
        }

        const product = await productRepository.findById(productId)
        if (!product) {
          throw new ClientError({
            message: " productId is required",
            explanation: "productId not found",
            statusCode: StatusCodes.BAD_REQUEST,
          });
        }

        let cartData = await user.cartData
        
        if (!cartData[productId]) {
            cartData[productId] = {};
        }
        if (!cartData[productId][size]) {
          //set the quantity to 1
          cartData[productId][size] = 1;
        } else {
          // If the size is already in the cart, increase the quantity
          cartData[productId][size] += 1;
        }
        const updateduser = await UserRepository.update(userId, {cartData})
        return updateduser
        
        
    } catch (error) {
       console.log("error in adding product to cart", error);
       throw new CustomError({
         message: error.message,
         explanation: "error in adding product to cart",
         statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
       });
        
    }
}

export const UpdateProducInCartService = async () => {
  try {
  } catch (error) {}
};

export const GetUsersCartService = async () => {
  try {
  } catch (error) {}
};