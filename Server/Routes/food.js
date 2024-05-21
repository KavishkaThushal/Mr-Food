import express from 'express';
import { addFood, removeFoodItem, showFoodList } from '../Controllers/foodController.js';
import multer from 'multer';

 const storage=multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
 })

 const upload=multer({storage:storage})

const route=express.Router();

route.post('/add',upload.single('image'),addFood)
route.get('/show-list',showFoodList)
route.get('/remove-list',removeFoodItem)


export {route as FoodRoute}