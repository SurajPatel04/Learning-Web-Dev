import mongoose from "mongoose";
import dotenv from "dotenv";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
dotenv.config();

const userSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    email: {
        type: String,
        required: true, 
        unique: true
    },
    password:{
        type: String,
        required: true
    }
}, { timestamps: true });

const USER = mongoose.model("User", userSchema)

userSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        return next()
    }
    this.password = await bcrypt.hash(this.password, 10)
    next(); 
})

userSchema.methods.generateRefershToken = function(){
    return jwt.sign(
        {_id: this._id}
    ),
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    }
}

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function (){
    return jwt.sign(
        {
            _id: this._id,
            email: this.email
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

export default USER