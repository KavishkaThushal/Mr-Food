import mongoose from "mongoose";

const UserSchema= new mongoose.Schema({
    userName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique:true
    },
    password:{
        type: String,
        required: true
    },
    cardData:{
        type: Object,
        default:{}
    }
},{minimize:false})

const User=mongoose.model('User',UserSchema)

export default User