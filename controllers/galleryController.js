import GalleryItem from "../models/galleryItem"

export function postGalleryItem(){

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