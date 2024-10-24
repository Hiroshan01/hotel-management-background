import express from 'express'
import { createCatogory,deleteCatogory,getCategory } from '../controllers/catgoryControllers.js'


const CategoryRouter=express.Router()

CategoryRouter.post("/",createCatogory)



//delete catgory
CategoryRouter.delete("/:name",deleteCatogory)


CategoryRouter.get("/",getCategory)

export default CategoryRouter;