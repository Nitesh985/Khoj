import { Category } from '../model/category.model.js'
import { ApiError } from '../utils/ApiError.js'
import { ApiResponse } from '../utils/ApiResponse.js'
import { asyncHandler } from '../utils/asyncHandler.js'

const addCategory = asyncHandler(async (req, res)=> {
    const {name, description} = req.body

    if (!name){
        throw new ApiError(400, "Name is a required field!")
    }

    const category = await Category.create({
        name,
        description
    })

    if (!category){
        throw new ApiError(501, "Internal Error while saving the category into the database")
    }

    return res.status(200)
    .json(
        new ApiResponse(200, `The category ${category} was added!`)
    )
})


const getAllCategories = asyncHandler(async (req, res)=> {
    const categories = await Category.find({})

    if (!categories){
        throw new ApiError(404, "The categories weren't found!")
    }

    return res.status(200)
    .json(
        new ApiResponse(200, "The categories were all fetched successfully!", categories)
    )
})







export {
    addCategory, 
    getAllCategories
}