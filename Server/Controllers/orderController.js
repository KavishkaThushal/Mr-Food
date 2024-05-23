import Order from "../Models/OrderModel.js"
import Stripe from 'stripe'
import User from "../Models/UserModel.js"
import dotenv from 'dotenv'
dotenv.config()
const stripe=new Stripe(process.env.STRIPE_KEY)
export const placeOrder=async(req,res)=>{
    try {
        const newOrder=new Order({
            userId:req.user,
            items:req.body.items,
            amount:req.body.amount,
            address:req.body.address,

        })
        await newOrder.save()
        await User.findByIdAndUpdate(req.user,{cartData:{}})

        const line_items = req.body.items.map((item) => {
            return {
                price_data: {
                    currency: 'LKR',  // Correct currency code for Sri Lankan Rupees
                    product_data: {
                        name: item.name
                    },
                    unit_amount: item.price * 100 // Assuming item.price is in rupees, convert to cents
                },
                quantity: item.quantity
            };
        });

        line_items.push({
            price_data: {
                currency: 'LKR',  // Correct currency code for Sri Lankan Rupees
                product_data: {
                    name: "Delivery Charges"
                },
                unit_amount: 200*100// Assuming item.price is in rupees, convert to cents
            },
            quantity: 1
        })

        const session=await stripe.checkout.sessions.create({
            line_items:line_items,
            mode:'payment',
            success_url: `http://localhost:5173/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `http://localhost:5173/verify?success=false&orderId=${newOrder._id}`,
        })
        res.json({success:true,session_url:session.url})
    } catch (error) {
        res.status(500).json({message:error.message,success:false})
    }
}

export const verifyOrder=async(req,res)=>{
   try {
      const {orderId,success}=req.body
      if(success==='true'){
          await Order.findByIdAndUpdate(orderId,{status:'paid'})
          res.status(200).json({success:true,status:'paid'})
      }else{
        await Order.findByIdAndDelete(orderId)
        res.status(200).json({success:false,status:'un Paid'})
      }
      
   } catch (error) {
    res.satatus(500).json({message:error.message,success:false})
   }

}