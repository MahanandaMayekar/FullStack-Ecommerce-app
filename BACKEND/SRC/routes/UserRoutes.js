import express from 'express'
import { registerUserController, userLoginController } from '../controllers/UserController.js'
import { AdminAuthMiddleware } from './../middleware/AdminAuthMiddleware.js';



const Router = express.Router()

Router.post("/register", registerUserController)
Router.post("/Login", userLoginController)
Router.post("/Login/admin", AdminAuthMiddleware,userLoginController);

export default Router