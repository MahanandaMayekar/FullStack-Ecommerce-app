import Layout from '@/pages/Layout'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductOrders from '@/pages/ProductOrders'
import AddProductContainer from '@/pages/AddProduct/AddProductContainer'
import ListProductContainer from '@/pages/ListProducts/ListProductContainer'



const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="list" element={<ListProductContainer />} />
          <Route path="orders" element={<ProductOrders />} />
          <Route path="add" element={<AddProductContainer />} />
        </Route>
      </Routes>
    </div>
  );
}

export default AppRoutes
