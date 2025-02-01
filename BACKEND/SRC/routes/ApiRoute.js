import express from 'express'
import UserRoutes from './UserRoutes.js'
import ProductRoutes from './ProductRoute.js'

const Router = express.Router()
 
Router.use("/users", UserRoutes)
Router.use("/products",ProductRoutes)


export default Router