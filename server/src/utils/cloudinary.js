import {v2 as cloudinary} from 'cloudinary'

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_API_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View Credentials' below to copy your API secret
});


const uploadToCloudinary = async (filePath) => {
    try {

        const response = await cloudinary.uploader.upload(filePath)
        return response.url
    } catch (error) {
        throw new Error(error.message || "Something went wrong, uploading the file to cloudinary")
    }
}


export { uploadToCloudinary }