import { User } from "../model/user.model";
import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";
import { asyncHandler } from "../utils/asyncHandler";
import { uploadToCloudinary } from "../utils/cloudinary";

const registerUser = asyncHandler(async (req, res)=>{
    const {username, email, password, location} = req.body

    const reqFields = ["username", "email", "password", "location"]

    for (const field of reqFields){
        if (!req.body(field)){
            throw new ApiError(400, `${field} field is a required field!`)
        }
    }

    const avatarFile = req.file

    const avatar = avatarFile? await uploadToCloudinary(avatarFile):null

    if (avatarFile && !avatar){
        throw new ApiError(500, "Something went wrong uploading the avatar image")
    }

    const user = await User.create({
        username,
        email,
        password,
        avatar,
        location
    })

    return res.status(200)
    .json(
        new ApiResponse(200, "The user has been registered successfully!", user)
    )
})


export { registerUser }