import Food from "../Models/FoodModel.js"
import fs from 'fs'

export const addFood=async(req,res)=>{
 
    try {
        const newItem=new Food({
            name:req.body.name,
            description:req.body.description,
            price:req.body.price,
            image:req.file.filename,
            category:req.body.category
        })

        await newItem.save();
        res.status(201).json({message:"New item added",success:true})
    } catch (error) {
        console.log(error);
        res.status(500).json({message:error.message,success:false})
    }
}

export const showFoodList=async(req,res)=>{
    try {
        const response=await Food.find({})
        res.status(200).json({data:response,success:true})
    } catch (error) {
        res.status(500).json({message:error.message,success:false})
    }
}

export const removeFoodItem=async(req,res)=>{
    try {
        const FoodItem=await Food.findById(req.params.id)
         fs.unlink(`uploads/${FoodItem.image}`,()=>{})
         await Food.findByIdAndDelete(req.params.id)
         res.status(200).json({message:"Item removed",success:true})
    } catch (error) {
        res.status(500).json({message:error.message,success:false})
    }
}