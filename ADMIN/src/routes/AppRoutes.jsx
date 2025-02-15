import Layout from '@/pages/Layout'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ListProducts from '@/pages/ListProducts'
import ProductOrders from '@/pages/ProductOrders'
import AddProductContainer from '@/pages/AddProduct/AddProductContainer'


const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="list" element={<ListProducts />} />
          <Route path="orders" element={<ProductOrders />} />
          <Route path="add" element={<AddProductContainer />} />
        </Route>
      </Routes>
    </div>
  );
}

export default AppRoutes
