import express from 'express'
import UserRoutes from './UserRoutes.js'
import ProductRoutes from './ProductRoute.js'
import CartRoutes from './CartRoute.js'
const Router = express.Router()
 
Router.use("/users", UserRoutes)
Router.use("/products", ProductRoutes)
Router.use("/cart", CartRoutes);


export default Router