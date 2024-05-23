import express from 'express';
import { addCartController, removeCartController, showCartController } from '../Controllers/cartController.js';
import { verifyToken } from '../Middleware/verify.js';

const router=express.Router();

router.post('/add-item',verifyToken,addCartController)
router.post('/remove-item',verifyToken,removeCartController)
router.get('/show-cart',verifyToken,showCartController)

export {router as CartRoute}