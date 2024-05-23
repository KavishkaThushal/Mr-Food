import express from 'express'
import { loginController, registerController } from '../Controllers/userController.js'

const router = express.Router()

router.post('/register',registerController)
router.post('/login',loginController)


export {router as userRouter}