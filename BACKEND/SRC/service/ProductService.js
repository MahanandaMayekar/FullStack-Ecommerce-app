import { productRepository } from "../repository/ProductRepository.js";
import CustomError from "../utils/errors/CustomError.js";
import { v2 as cloudinary } from "cloudinary";
import ClientError from "./../utils/errors/ClientError.js";
import { StatusCodes } from "http-status-codes";

CustomError;
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
