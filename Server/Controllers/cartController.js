import User from "../Models/UserModel.js"

export const addCartController=async(req,res)=>{
   

    try {
        const user=await User.findById({_id:req.user})
        if(!user){
            return res.status(400).json({success:false,message:"User not found"})
        }
        let cartItem=  user.cartData

        if(!cartItem[req.body.itemId]){
            cartItem[req.body.itemId]=1
        }else{
            cartItem[req.body.itemId]+=1
        }

        await User.findByIdAndUpdate(req.user,{cartData:cartItem})
        res.status(200).json({success:true,message:"Item added to cart"})

    } catch (error) {
        console.log(error);
        res.status(500).json({success:false,message:error.message})
    }

}

export const removeCartController=async(req,res)=>{
    try {
        const user=await User.findById({_id:req.user})
        if(!user){
            return res.status(400).json({success:false,message:"User not found"})
        }
        let cartItem=  user.cartData
            console.log(cartItem);
        if(cartItem[req.body.itemId]>0){
            cartItem[req.body.itemId]-=1
        }

        await User.findByIdAndUpdate(req.user,{cartData:cartItem})
        res.status(200).json({success:true,message:"Item remove successfully"})

    } catch (error) {
        res.status(500).json({success:false,message:error.message})
    }

}

export const showCartController=async(req,res)=>{
    try {
        const user=await User.findById({_id:req.user})
        if(!user){
            return res.status(400).json({success:false,message:"User not found"})
        }
        res.status(200).json({success:true,data:user.cartData})
    } catch (error) {
        res.status(500).json({success:false,message:error.message})
    }
}