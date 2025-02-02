import express from 'express'
import { addProductController, deleteProductsController, fetchAllProductsController, fetchProductByIdController } from '../controllers/ProductController.js'
import { upload } from '../middleware/MulterMiddleware.js'
fetchProductByIdController

const Router = express.Router()
Router.post('/add', upload.fields([
  { name: 'image1', maxCount: 1 },
  { name: 'image2', maxCount: 1 },
  { name: 'image3', maxCount: 1 },
  { name: 'image4', maxCount: 1 },
]), addProductController);

Router.get("/list-products", fetchAllProductsController);
Router.delete("/deleteProduct/:productId", deleteProductsController);
Router.get("/:productId", fetchProductByIdController);




export default Router