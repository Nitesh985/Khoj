import {Schema, model} from 'mongoose'


const likeSchema = new Schema({
    destinationId:{
        type: Schema.Types.ObjectId,
        ref: "Destination"
    },
    userId:{
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    commentId:{
        type: Schema.Types.ObjectId,
        ref:"comments"
    }
})


export const Like = model("Like", likeSchema)