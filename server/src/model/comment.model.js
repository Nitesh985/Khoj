import { Schema, model } from 'mongoose'


const commentSchema = new Schema({
    destinationId:{
        type: Schema.Types.ObjectId,
        ref: "Destination"
    },
    userId:{
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, {timestamps:true})


export const Comment = model("Comment", commentSchema)