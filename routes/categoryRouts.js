import express from 'express'
import { createCatogory } from '../controllers/catgoryControllers.js'


const CategoryRouter=express.Router()

CategoryRouter.post("/",createCatogory)

export default CategoryRouter;