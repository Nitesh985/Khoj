import {Schema, model} from 'mongoose'


const likeSchema = new Schema({
    destinationId:{
        type: Schema.Types.ObjectId,
        ref: "destinations"
    },
    userId:{
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    commentId:{
        type: Schema.Types.ObjectId,
        ref:"comments"
    }
})


export const Like = model("Like", likeSchema)