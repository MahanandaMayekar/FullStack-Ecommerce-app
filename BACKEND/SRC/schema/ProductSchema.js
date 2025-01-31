import mongoose from 'mongoose'

 const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required:[true,"Product name is required"]
    },
     description: {
        type: String,
        required:[true,"description is required"]
    },
    image: {
        type: Array,
        required:[true,"images is required"]
    },
    price: {
        type: Number,
        required:[true,"Price is required"]
    },
    category: {
        type: String,
        required:[true,"category is required"]
    },
    subCategory: {
        type: String,
        required:[true,"subCategory is required"]
    },
    bestSeller: {
        type: String
        
    }
    
 }, { timestamps })

 export const Product=mongoose.model("Product",ProductSchema)