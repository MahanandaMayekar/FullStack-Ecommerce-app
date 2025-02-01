import express from 'express'
import { registerUserController, userLoginController } from '../controllers/UserController.js'


const Router = express.Router()

Router.post("/register", registerUserController)
Router.post("/Login",userLoginController)

export default Router