import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import { FoodRoute } from './Routes/food.js';

dotenv.config();
const app = express();
app.use(cors())
app.use(express.json());
 
mongoose.connect(process.env.DBURL).then(()=>{
    console.log('Database connected');
}).catch((error)=>{
    console.log('Database is not connected',error);
})

const port=process.env.PORT || 3000

//routes
app.use('/api/food',FoodRoute)
app.use('/images',express.static('uploads'))

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})