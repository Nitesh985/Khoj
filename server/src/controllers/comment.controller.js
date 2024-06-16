import { Comment } from "../model/comment.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const createComment = asyncHandler(async(req, res)=>{
    const { destinationId } = req.params
    const { userId } = req.user._id

    if (!userId){
        throw new ApiError(401, "The user is not authorised to do such actions")
    }

    if (!destinationId){
        throw new ApiError(400, "The destination was not given!")
    }

    const comment = await Comment.create({
        destinationId,
        userId
    })

    if (!comment){
        throw new ApiError(500, "Something went wrong, saving the comment")
    }

    return res.status(200)
    .json(
        new ApiResponse(200, "The comment was created successfully!", comment)
    )
})


const getAllComments = asyncHandler(async (req, res)=>{
    const {destinationId} = req.params

    if (!destinationId){
        throw new ApiError(400, "The destination was not given")
    }

    console.log(destinationId)

    const comments = await Comment.find({destinationId})

    if (!comments){
        throw new ApiError(500, "Something went wrong fetching the comments")
    }

    return res.status(200)
    .json(
        new ApiResponse(200, "The comments were fetched successfully", comments)
    )
})

export {createComment, getAllComments}