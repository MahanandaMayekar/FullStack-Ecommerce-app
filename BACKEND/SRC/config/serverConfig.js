import dotenv from 'dotenv'

dotenv.config()

export const PORT = process.env.PORT || 5000
export const DB_CONNECT_URL = process.env.DB_CONNECT_URL
export const CLOUDINARY_API_KEY=process.env.CLOUDINARY_API_KEY
export const CLOUDINARY_SECRET_KEY=process.env.CLOUDINARY_SECRET_KEY
export const CLOUDINARY_NAME = process.env.CLOUDINARY_NAME
export const JWT_SECRET = process.env.JWT_SECRET
export const JWT_EXPIRY = process.env.JWT_EXPIRY
export const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
export const RAZORPAR_KEY_ID = process.env.RAZORPAR_KEY_ID;
export const RAZORPAR_KEY_SECRET = process.env.RAZORPAR_KEY_SECRET;