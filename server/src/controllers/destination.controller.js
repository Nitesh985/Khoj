import { ApiResponse } from '../utils/ApiResponse.js'
import { ApiError } from '../utils/ApiError.js'
import { asyncHandler } from '../utils/asyncHandler.js'
import { Category } from '../model/category.model.js'
import { Destination } from '../model/destination.model.js'
import { uploadToCloudinary } from '../utils/cloudinary.js'



const createDestination = asyncHandler(async (req, res)=> {
    const { name, description, category, location } = req.body

    console.log(req.body)

    const destinationCategory = await Category.find({
        name:category
    })
    console.log(destinationCategory)

    if (!destinationCategory){
        throw new ApiError(404, "The category was not found!")
    }

    const inputImages = req?.files
    
    if (!inputImages){
        throw new ApiError(400, "The images were not found!")
    }

    const images = []
    for (const img of inputImages){
        const image = img?await uploadToCloudinary(img?.path):null
        if (image){
            images.push(image)
        }
    }

    if (!images?.length){
        throw new ApiError(500, "Error while uploading the images to the ")
    }

    console.log(images)


    const destination = await Destination.create({
        name,
        description,
        location,
        categoryId: destinationCategory?._id,
        images
    })

    console.log(destination)

    if (!destination){
        throw new ApiError(501, "There was an error, saving the destination details")
    }

    return res.status(200)
    .json(
        new ApiResponse(200, "The destination was created successfully!", destination)
    )

})


const getAllDestinations = asyncHandler(async (req, res)=> {
    const {page=1, limit=10} = req.query

    const destinations = await Destination.aggregate([
        {
            $lookup:{
                from:"likes",
                foreignField:"destinationId",
                localField:"_id",
                as:"likes"
            }
        },
        {
            $addFields:{
                likeCount:{
                    $size:"$likes"
                }
            }
        },
        {
            $lookup:{
                from:"comments",
                foreignField:"destinationId",
                localField:"_id",
                as:"comments"
            }
        },
        {
            $addFields:{
                commentCount:{
                    $size:"$comments"
                }
            }
        },
    ])


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
        $match: {
          name: categoryName,
        },
      },
      {
        $lookup: {
          from: "destinations",
          localField: "_id",
          foreignField: "categoryId",
          as: "destinations",
          pipeline: [
            {
              $lookup: {
                from: "likes",
                foreignField: "destinationId",
                localField: "_id",
                as: "likes",
              },
            },
            {
              $addFields: {
                likeCount: {
                  $size: "$likes",
                },
              },
            },
            {
              $lookup: {
                from: "comments",
                foreignField: "destinationId",
                localField: "_id",
                as: "comments",
              },
            },
            {
              $addFields: {
                commentCount: {
                  $size: "$comments",
                },
              },
            },
            {
              $project: {
                _id: 1,
                name: 1,
                description: 1,
                images: 1,
                location: 1,
                likes:1,
                likeCount:1,
                comments:1,
                commentCount:1
              },
            },
          ],
        },
      },
    ]);

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