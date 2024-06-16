import { Destination } from "../model/destination.model.js";
import { Like } from "../model/like.model.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const toggleLike = asyncHandler(async (req, res)=>{
    const userId = req.user?._id
    const {destinationId} = req.params

    if (!userId){
        throw new ApiError(401, "The user is not authorised!")
    }

    if (!destinationId){
        throw new ApiError(404, "The destination was not found!")
    }

    const findLikedDestination = await Like.findOneAndDelete({
        $and:[{userId}, {destinationId}]
    })


    if (!findLikedDestination){
        await Like.create({
            userId,
            destinationId
        })
    }

    return res.status(200)
    .json(
        new ApiResponse(200, "The like was toggled")
    )
})


const toggleCommentLike = asyncHandler(async(req, res)=>{
    const userId = req.user?._id

    const { commentId } = req.params

    if (!commentId){
        throw new ApiError(404, "The given comment was not found!")
    }

    const findLikedComments = await Like.findOneAndDelete({
        $and:[{userId}, {commentId}]
    })

    if (!findLikedComments){
        await Like.create({
            userId,
            commentId
        })
    }

    return res.status(200)
    .json(
        new ApiResponse(200, "The comment like was successfully toggled")
    )

})

const getLikedDestinations = asyncHandler(async (req, res)=>{
    const {userId} = req.user?._id

    if (!userId){
        throw new ApiError(401, "The user is not authenticated to do such action")
    }

    await Like.aggregate([
        {
            $lookup:{
                from:"destinations",
                localField:"destinationId",
                foreignField:"_id",
                as:"destinations"
            }
        }
    ])
})


export { toggleLike, toggleCommentLike, getLikedDestinations }