import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "../Customer/components/Navigation/Navigation";
import About from "../Customer/pages/About";
import PrivacyPolicy from "../Customer/pages/PrivacyPolicy";
import Contact from "../Customer/pages/Contact";
import Admin from "../Admin/Admin";
import Product from "../Customer/components/Product/Product";
import ProductDetails from "../Customer/components/Product/ProductDetails";
import Cart from "../Customer/components/Cart/Cart";
import HomePage from "../Customer/pages/HomePage/HomePage";
import DemoAdmin from "../Admin/DemoAdmin";


const Routers = () => {
  return (
    <div>
        <div>
             <Navigation/>
        </div>
       <div className="">
        <Routes>

        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/home" element={<HomePage/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/privaciy-policy" element={<PrivacyPolicy/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/men" element={<Product/>}></Route>
        <Route path="/product/:productId" element={<ProductDetails/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      

        <Route path="/admin" element={<Admin/>}></Route>
        <Route path="/demo" element={<DemoAdmin/>}></Route>

      </Routes>
       </div>
      
    </div>
  );
};

export default Routers;
