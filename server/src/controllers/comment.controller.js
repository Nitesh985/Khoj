import { Comment } from "../model/comment.model.js";
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
})


// const 