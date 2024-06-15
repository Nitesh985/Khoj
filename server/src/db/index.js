import mongoose from "mongoose";


const connectToDB = async() => {
    try {
        const connection = await mongoose.connect(`${process.env.MONGODB_URI}/${dbName}`)
        console.log("Mongodb connected successfully");
        return connection
    } catch (error) {
        throw new Error("Mongodb connection failed")
    }
}


export { connectToDB }