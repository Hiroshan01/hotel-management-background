import express from 'express';
import {postGalleryItem,getGalleryItem} from "../controllers/galleryController.js"



const galleryItemRouter=express.Router();

galleryItemRouter.post("/",postGalleryItem)

galleryItemRouter.get("/",getGalleryItem)

export default galleryItemRouter;
