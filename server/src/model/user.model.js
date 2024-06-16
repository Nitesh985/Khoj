import { Schema, model } from 'mongoose'
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'


const userSchema = new Schema({
    username:{
        type:String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    avatar:{
        type:String
    },
    location:{
        type: String
    },
    refreshToken:{
        type:String
    }
})
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 10);
  return next();
});
  
userSchema.methods.verifyPassword = async function(password){
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function () {
    return jwt.sign({_id:this._id}, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    })
}
  
userSchema.methods.generateRefreshToken = function () {
    return jwt.sign({_id:this._id}, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    })
}

  

export const User = model("User", userSchema)