import { v2 as cloudinary } from 'cloudinary';
import { CLOUDINARY_API_KEY,CLOUDINARY_SECRET_KEY,CLOUDINARY_NAME } from './serverConfig.js';

export const ConnectToCloudinary = () => {
    try {
        cloudinary.config({
            cloud_name: CLOUDINARY_NAME,
            api_key:CLOUDINARY_API_KEY,
            api_secret:CLOUDINARY_SECRET_KEY 

        })
        console.log("Connected to Cloudinary successfully!");
        
    } catch (error) {
        console.log("Error in connecting to Cloudinary",error);
        
        
    }
}