import GalleryItem from "../models/galleryItem.js"

export function postGalleryItem(req, res){

    const galleryItem=req.body

    const newGalleryItem=new GalleryItem(galleryItem)
    newGalleryItem.save().then(

        ()=>{
            res.json({
                message:"Gallery Ithem created Successfully"
            })
        }
    ).catch(
        ()=>{
            res.status(500).json({
                message:"Gallery Ithem created"
            })
        }
    )

}
export function getGalleryItem(req,res){
    GalleryItem.find().then(
        (list)=>{
            res.json({
                list:list
            })
        }
    )

}
