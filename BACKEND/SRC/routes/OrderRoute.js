import express from "express"
import { AdminAuthMiddleware } from '../middleware/AdminAuthMiddleware.js'
import { AuthMiddleware } from './../middleware/AuthMiddleware.js';
import { adminOrderListController, placeOrderByRazorparController, placeOrderCODController, placeOrderStripeController, updateStatusController, usersOrderDetailsController, verifyStripeController } from '../controllers/OrderController.js';
placeOrderByRazorparController
const Router = express.Router()
//admin
Router.get("/list-orders", AdminAuthMiddleware, adminOrderListController);
Router.post("/status", AdminAuthMiddleware, updateStatusController);

//payment
Router.post("/cod", AuthMiddleware, placeOrderCODController);
Router.post("/stripe", AuthMiddleware, placeOrderStripeController);
Router.post("/razorPay", AuthMiddleware, placeOrderByRazorparController);
//user
Router.get("/users-orders", AuthMiddleware, usersOrderDetailsController);
//verify payment
Router.post("/verify", AuthMiddleware, verifyStripeController);





export default Router