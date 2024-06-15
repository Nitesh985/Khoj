import { Destination } from "../model/destination.model";
import { Like } from "../model/like.model";
import { ApiError } from "../utils/ApiError";
import { asyncHandler } from "../utils/asyncHandler";

const toggleLike = asyncHandler(async (req, res)=>{
    const userId = req.user?._id
    const {destinationId, commentId} = req.params

    if (!userId){
        throw new ApiError(401, "The user is not authorised!")
    }

    if (!destinationId && !commentId){
        throw new ApiError(404, "The destination id or comment id was not found!")
    }

    const findLikedDestination = await Like.findOneAndUpdate({
        $and:[{userId}, {destinationId}]
    })

    if (!findLikedDestination ){
        await Like.create({})
    }

    const findLikedComment = await Like.findOne({
        $and:[{userId}, {commentId}]
    }) 

    




})