import GalleryItem from "../models/galleryItem.js"

export function postGalleryItem(req, res){

    //authentication
    const user=req.body.user
    if(user==null){
        res.status(403).json({
            message:"Please login to create a gallery item"
        })
        return //end function
    }
    

    const galleryItem=req.body.item

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
