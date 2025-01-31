import mongoose from 'mongoose';
import bcrypt from 'bcrypt'

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
}, { timestamps: true }, { minimize: false })

UserSchema.pre("save", function hasspassword(next) {
    const user = this
    const SALT = bcrypt.genSaltSync(9)
    const hasshedPassword = bcrypt.hashSync(user.password, SALT)
    this.password = hasshedPassword
    next()
    
})

//minimise:false will save empty object i.e catdata when user is created
export const User=mongoose.models.User || mongoose.model("User",UserSchema)