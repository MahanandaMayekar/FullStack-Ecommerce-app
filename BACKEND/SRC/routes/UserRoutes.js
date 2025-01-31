import express from 'express'
import { registerUserController } from '../controllers/UserController.js'


const Router = express.Router()

Router.post("/register",registerUserController)

export default Router