import { productRepository } from "../repository/ProductRepository.js";
import CustomError from "../utils/errors/CustomError.js";
import { v2 as cloudinary } from "cloudinary";
import ClientError from "./../utils/errors/ClientError.js";
import { StatusCodes } from "http-status-codes";

export const addProductService = async (ProductData, imageData) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      bestSeller,
      sizes,
    } = ProductData;

    const images = [
      imageData.image1?.[0],
      imageData.image2?.[0],
      imageData.image3?.[0],
      imageData.image4?.[0],
    ].filter(Boolean); // Removes undefined value

    const uploadImages = async (images) => {
      try {
        const imgUrls = [];

        for (const image of images) {
          const result = await cloudinary.uploader.upload(image.path, {
            resource_type: "image",
          });
          imgUrls.push(result.secure_url);
        }
        return imgUrls;
      } catch (error) {
        throw new ClientError({
          message: "Image upload failed",
          explanation: error.message,
          statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
        });
      }
    };
    const imageUrls = await uploadImages(images);

    //console.log("Uploaded Image URLs:", imageUrls);
    const product = await productRepository.create({
      name,
      description,
      price: Number(price),
      category,
      subCategory,
      bestSeller: bestSeller === "true",
      sizes: JSON.parse(sizes),
      image: imageUrls,
    });

    return product;
  } catch (error) {
    console.log("error in creating product", error);
    throw new CustomError({
      message: error.message,
      explanation: "error in creating product",
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
};

export const fetchAllProductsService = async () => {
  try {
    const allProducts = await productRepository.findAll();
    //console.log("all products", allProducts);
    return allProducts;
  } catch (error) {
    console.log("error in fetching all the product", error);
    throw new CustomError({
      message: error.message,
      explanation: "error in fetching all the product",
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
};

export const deleteProductsService = async (productId) => {
  try {

    if (!productId) {
     throw new ClientError({
       message: " productId is required",
       explanation: "productId not found",
       statusCode: StatusCodes.NOT_FOUND,
     });
    }
    const deletedProduct = await productRepository.deleteById(productId);

    if (!deletedProduct) {
       throw new ClientError({
         message: " Product not found or already deleted",
         explanation: "Invalid productId or product does not exist",
         statusCode: StatusCodes.NOT_FOUND,
       });
    }
    //console.log("all products", allProducts);
    return deletedProduct;
  } catch (error) {
    console.log("error in deleting the product", error);
    throw new CustomError({
      message: error.message,
      explanation: "error in deleting the product",
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
};
