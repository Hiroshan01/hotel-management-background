import mongoose from "mongoose";

const galleryItem=mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        image:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        }
    }

)
const GalleryItem=mongoose.model("galleryItem",galleryItem)
export default GalleryItem;
