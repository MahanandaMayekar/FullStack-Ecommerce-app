import express from 'express'
import UserRoutes from './UserRoutes.js'

const Router = express.Router()
 
Router.use("/users",UserRoutes)


export default Router