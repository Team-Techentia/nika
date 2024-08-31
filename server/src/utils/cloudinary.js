import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';


// Configuration
cloudinary.config({ 
    cloud_name: process.env.cloud_name, 
    api_key: process.env.api_key, 
    api_secret: process.env.api_secret 
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;

       
        const uploadResult = await cloudinary.uploader.upload(localFilePath, {
            resource_type: 'auto'
        });

        

        return uploadResult;
        fs.unlinkSync(localFilePath)

    } catch (error) {
        fs.unlinkSync(localFilePath); 
        console.log("Error uploading file:", error);
        return null;
    }
};
const deleteImageFromCloudinary = async (publicId) => {
    try {
        await cloudinary.uploader.destroy(publicId);
    } catch (error) {
        console.log("Error deleting image from Cloudinary:", error);
    }
};

export { uploadOnCloudinary,  deleteImageFromCloudinary };
