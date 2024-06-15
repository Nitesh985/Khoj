import mongoose from "mongoose";
import { dbName } from "../constant.js";


const connectToDB = async() => {
    try {
        const connection = await mongoose.connect(`${process.env.MONGODB_URI}/${dbName}`)
        console.log("Mongodb connected successfully");
        return connection
    } catch (error) {
        throw error
    }
}


export { connectToDB }