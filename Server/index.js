import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import { FoodRoute } from './Routes/food.js';
import { userRouter } from './Routes/user.js';
import { CartRoute } from './Routes/cart.js';
import { orderRouter } from './Routes/order.js';

dotenv.config();
const app = express();
app.use(cors())
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());

 
mongoose.connect(process.env.DBURL).then(()=>{
    console.log('Database connected');
}).catch((error)=>{
    console.log('Database is not connected',error);
})

const port=process.env.PORT || 3000

//routes
app.use('/api/food',FoodRoute)
app.use('/api/user',userRouter)
app.use('/api/cart',CartRoute)
app.use('/api/order',orderRouter)
app.use('/images',express.static('uploads'))

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})