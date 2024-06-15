import { ApiResponse } from '../utils/ApiResponse.js'
import { ApiError } from '../utils/ApiError.js'
import { asyncHandler } from '../utils/asyncHandler.js'
import { Category } from '../model/category.model.js'
import { Destination } from '../model/destination.model.js'
import { uploadToCloudinary } from '../utils/cloudinary.js'



const createDestination = asyncHandler(async (req, res)=> {
    const { name, description, category, location } = req.body

    const destinationCategory = await Category.find({
        name:category
    })

    if (!destinationCategory){
        throw new ApiError(404, "The category was not found!")
    }

    const inputImages = req?.files

    const images = []
    for (const img of inputImages){
        const image = await uploadToCloudinary(img?.path)
        images.push(image?.url)
    }


    const destination = await Destination.create({
        name,
        description,
        location,
        categoryId: destinationCategory?._id,
        images
    })

    if (!destination){
        throw new ApiResponse(501, "There was an error, saving the destination details", destination)
    }

    return res.status(200)
    .json(
        new ApiResponse(200, "The destination was created successfully!")
    )

})


const getAllDestinations = asyncHandler(async (req, res)=> {
    const {page, limit} = req.query


    const destinations = await Destination.find({
        from:""
    })

    if (!destinations){
        throw new ApiError(501, "Error fetching the destinations, please try again later")
    }
    
    let endIndex = (page && limit)?page*limit:destinations.length
    let startIndex = (page && limit)?endIndex-limit:0

    let destinationsToSend
    endIndex = (destinations?.length>endIndex)?endIndex:destinations.length
    

    if (destinations?.length>startIndex){
        destinationsToSend = destinations.slice(startIndex, endIndex) // (endIndex) element is excluded
    }

    const responseMessage = destinations.length?"All destinations fetched successfully":"No data was found"

    return res.status(200)
    .json(
        new ApiResponse(200,
        responseMessage,
        destinationsToSend)
    )
})

const getDestinationByCategory = asyncHandler(async(req, res)=>{
    const {categoryName} = req.params

    if (!categoryName){
        throw new ApiError(400, "The category name was not given!")
    }
    
    const destinations = await Category.aggregate([
        {
            $match:{
                name: categoryName
            }
        },
        {
            $lookup:{
                from:"destinations",
                localField:"_id",
                foreignField:"categoryId",
                as:"destinations",
                pipeline:[
                    {
                        $project:{
                            _id:1,
                            name:1,
                            description:1,
                            images:1,
                            location:1
                        }
                    }
                    
                ]
            }
        }
    ])

    if (!destinations?.length){
        throw new ApiError(404, "We couldn't fetch any destination!")
    }

    return res.status(200)
    .json(
        new ApiResponse(200, "Destinations fetched successfully!", destinations[0]?.destinations)
    )
})


const searchDestination = asyncHandler(async (req, res)=>{
    const {s} = req.query

    if (!s){
        throw new ApiError(400, "The search query is not given")
    }

    let destinations = await Destination.aggregate([
        {
            $addFields:{
                "nameLwr":{
                    $toLower:"$name"
                }
            }
        },
        {
            $match:{
                "nameLwr":{
                    $regex:s.toLowerCase()
                }
            }
        },
        {
            $project:{
                nameLwr:0
            }
        }
    ])

    console.log(destinations)

    



    if (!destinations?.length){
        throw new ApiError(404, "No destinations were found!")
    }

    return res.status(200)
    .json(
        new ApiResponse(200, "The destinations were fetched successfully!", destinations)
    )
})



export { createDestination, getAllDestinations, getDestinationByCategory, searchDestination }