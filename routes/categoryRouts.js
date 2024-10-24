import express from 'express'
import { createCatogory,deleteCatogory,getCategory,getCategoryByName,updateCategory }
 from '../controllers/catgoryControllers.js'


const CategoryRouter=express.Router()

CategoryRouter.post("/",createCatogory)



//delete catgory
CategoryRouter.delete("/:name",deleteCatogory)

CategoryRouter.get("/:name",getCategoryByName)

CategoryRouter.get("/",getCategory)

CategoryRouter.put("/:name",updateCategory)

export default CategoryRouter;