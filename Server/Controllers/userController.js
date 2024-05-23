import User from "../Models/UserModel.js"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
import validator from 'validator'
dotenv.config()

const createToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)

}

export const registerController = async (req, res) => {
    try {
        const {userName, email, password } = req.body
        const existUser=await User.findOne({email})
        if(existUser){
            return res.status(400).json({message:"User already exists",success:false})
        }

        if(!validator.isEmail(email)){
            return res.status(400).json({message:"Invalid Email",success:false})
        }

        if(password.length<8){
            return res.status(400).json({message:"Password must be atleast 8 characters",success:false})
        }

             const salt = await bcrypt.genSalt(10)
             const hashedPassword = await bcrypt.hash(password, salt)

            const newUser=new User({
                userName,
                email,
                password:hashedPassword
            }) 
            await newUser.save()
            const token=createToken(newUser._id)
            res.cookie('access_token',token,{httpOnly:true}).status(201).json({message:"User registered",success:true,token})
        
    } catch (error) {
        res.status(500).json({ message: error.message, success: false })
    }
}

export const loginController = async (req, res) => {
   try {
    const {email, password}=req.body
    if(!validator.isEmail(email)){
        return res.status(400).json({message:"Invalid Email",success:false})
    }

    const user=await User.findOne({email})
    const validPassword=await bcrypt.compare(password,user.password)
    if(!validPassword){
        return res.status(400).json({message:"Invalid Password",success:false})
    }
    const token=createToken(user._id)
    res.cookie('access_token',token,{httpOnly:true}).status(200).json({message:"User logged in",success:true,token})

   } catch (error) {
    res.status(500).json({ message: error.message, success: false })
   }
}