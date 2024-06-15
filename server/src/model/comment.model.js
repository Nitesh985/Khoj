import { Schema, model } from 'mongoose'


const commentSchema = new Schema({
    destinationId:{
        type: Schema.Types.ObjectId,
        ref: "destinations"
    },
    userId:{
        type: Schema.Types.ObjectId,
        ref: "users"
    }
}, {timestamps:true})


export const Comment = model("Comment", commentSchema)