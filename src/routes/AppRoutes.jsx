import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from './../pages/About';
import Collections from './../pages/Collections';
import Products from './../pages/Products';
import Orders from './../pages/Orders';
import Cart from './../pages/Cart';
import Contact from './../pages/Contact';
import Login from './../pages/Login';
import PlaceOrder from './../pages/PlaceOrder';
import Layout from './../pages/Layout';
import NotFoundPage from '../pages/NotFoundPage';





const AppRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/collection" element={<Collections />} />
                    <Route path="/product/:productId" element={<Products />} />
                    <Route path="/order" element={<Orders />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/place-order" element={<PlaceOrder />} />
                </Route>
                <Route path='*' element={<NotFoundPage/>}/>
            </Routes>
        </div>
    );
}

export default AppRoutes
