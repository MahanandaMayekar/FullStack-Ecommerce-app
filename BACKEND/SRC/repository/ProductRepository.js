import { CrudRepository } from './CrudRepository.js'
import { Product } from './../schema/ProductSchema.js';


export const productRepository = {
  ...CrudRepository(Product)
};