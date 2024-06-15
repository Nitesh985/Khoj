import { Schema, model } from 'mongoose'


const destinationSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String
    },
    location:{
        type: String,
        required: true
    },
    images:{
        type: [String],
        required: true
    },
    categoryId:{
        type: Schema.Types.ObjectId,
        ref: "Category"
    }
})


export const Destination = model("Destination", destinationSchema)