import { CrudRepository } from './CrudRepository.js'
import { Product } from './../schema/ProductSchema.js';


export const productRepository = {
  ...CrudRepository(Product),
  getProductWithDetails: async (id) => {
    const product = await Product.findById(id).populate("owner", "name email role")
    return product
    
  }
};