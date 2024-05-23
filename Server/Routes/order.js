import express from 'express';
import { placeOrder, verifyOrder } from '../Controllers/orderController.js';
import { verifyToken } from '../Middleware/verify.js';

const router=express.Router();

router.post('/place-order',verifyToken,placeOrder)
router.post('/order-verify',verifyOrder)

export {router as orderRouter}