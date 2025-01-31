import dotenv from 'dotenv'

dotenv.config()

export const PORT = process.env.PORT || 5000
export const DB_CONNECT_URL = process.env.DB_CONNECT_URL
export const CLOUDINARY_API_KEY=process.env.CLOUDINARY_API_KEY
export const CLOUDINARY_SECRET_KEY=process.env.CLOUDINARY_SECRET_KEY
export const CLOUDINARY_NAME=process.env.CLOUDINARY_NAME