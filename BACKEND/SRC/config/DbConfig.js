import mongoose from 'mongoose'
import { DB_CONNECT_URL } from './serverConfig.js';
export const ConnectToMongoDb = async () => {
    try {
        await mongoose.connect(DB_CONNECT_URL)
        console.log("Successfully connected to db");
        
    } catch (error) {
        console.log("error in connecting to mongoDb");
        
        
    }
}