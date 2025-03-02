import express from "express"
import { AdminAuthMiddleware } from '../middleware/AdminAuthMiddleware.js'
import { AuthMiddleware } from './../middleware/AuthMiddleware.js';
import { adminOrderListController, placeOrderCODController, updateStatusController, usersOrderDetailsController } from '../controllers/OrderController.js';


const Router = express.Router()
//admin
Router.get("/list-orders", AdminAuthMiddleware, adminOrderListController);
Router.post("/status", AdminAuthMiddleware, updateStatusController);

//payment
Router.post("/cod", AuthMiddleware, placeOrderCODController);
Router.post("/stripe", AuthMiddleware);
Router.post("/razorPay", AuthMiddleware);
//user
Router.get("/users-orders", AuthMiddleware, usersOrderDetailsController);





export default Router