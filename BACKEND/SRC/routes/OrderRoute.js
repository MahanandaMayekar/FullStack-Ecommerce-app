import express from "express"
import { AdminAuthMiddleware } from '../middleware/AdminAuthMiddleware.js'
import { AuthMiddleware } from './../middleware/AuthMiddleware.js';
import { placeOrderCODController, usersOrderDetailsController } from '../controllers/OrderController.js';

const Router = express.Router()
//admin
Router.get("/list-orders",AdminAuthMiddleware)
Router.post("/status", AdminAuthMiddleware)

//payment
Router.post("/cod", AuthMiddleware, placeOrderCODController);
Router.post("/stripe", AuthMiddleware);
Router.post("/razorPay", AuthMiddleware);
//user
Router.get("/users-orders", AuthMiddleware, usersOrderDetailsController);





export default Router