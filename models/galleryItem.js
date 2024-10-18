import mongoose from "mongoose";

const galleryItem=mongoose.Schema(
    {
        name:{
            tyep:String,
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
const GalleryItem=mongoose.Schema("galleryItem",galleryItem)
export default GalleryItem;