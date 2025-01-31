import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        
    },
    email: {
         type: String,
        required: [true, "Email is required"],
        unique: [true, 'This email is already exist'],
        match: [
            /^[\w.-]+@([\w-]+\.)+[a-zA-Z]{2,}$/,
        'Please enter a valid email address'
        ]
        
    },
     password: {
      type: String,
      required: [true, 'Password is required']
    },
    cartData: {
        type: Object,
        default:{}
     }
}, { timestamps:true },{minimize:false})

//minimise:false will save empty object i.e catdata when user is created
export const User=mongoose.models.User || mongoose.model("User",UserSchema)