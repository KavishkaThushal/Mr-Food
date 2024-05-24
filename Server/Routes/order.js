import express from 'express';
import { placeOrder, showAllOrders, showOrders, updateStatus, verifyOrder } from '../Controllers/orderController.js';
import { verifyToken } from '../Middleware/verify.js';

const router=express.Router();

router.post('/place-order',verifyToken,placeOrder)
router.post('/order-verify',verifyOrder)
router.get('/myorders',verifyToken,showOrders)
router.get('/allorders',showAllOrders)
router.post('/update-status/:id',updateStatus)

export {router as orderRouter}