import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import NotFoundPage from "../pages/NotFoundPage";
import About from "./../pages/About";
import Contact from "./../pages/Contact";
import Layout from "./../pages/Layout";
import Login from "./../pages/Login";
import Orders from "./../pages/Orders";
import PlaceOrder from "./../pages/PlaceOrder";
import Products from "./../pages/Products";
import CollectionContainer from '@/pages/collection/CollectionContainer';
import CartContainer from '@/pages/cart/CartContainer';


const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/collection" element={<CollectionContainer />} />
          <Route path="/product/:productId" element={<Products />} />
          <Route path="/order" element={<Orders />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/place-order" element={<PlaceOrder />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
