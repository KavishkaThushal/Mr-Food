import express from 'express';
import { placeOrder, showOrders, verifyOrder } from '../Controllers/orderController.js';
import { verifyToken } from '../Middleware/verify.js';

const router=express.Router();

router.post('/place-order',verifyToken,placeOrder)
router.post('/order-verify',verifyOrder)
router.post('/myorders',verifyToken,showOrders)

export {router as orderRouter}