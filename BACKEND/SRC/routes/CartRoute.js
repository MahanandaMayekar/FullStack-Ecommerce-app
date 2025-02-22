import express from "express"
import { AddProductToCartController, UpdateProducInCartController, GetUsersCartController } from '../controllers/CartController.js'
import { AuthMiddleware } from '../middleware/AuthMiddleware.js'
const Router = express.Router()

Router.get("/get-cart-details",AuthMiddleware,GetUsersCartController)
Router.post("/add-to-cart",AuthMiddleware,AddProductToCartController)
Router.post("/update-cart",AuthMiddleware,UpdateProducInCartController)




export default Router