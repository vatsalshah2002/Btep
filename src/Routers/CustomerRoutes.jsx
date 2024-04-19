import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

//import Cart from "../customer/Components/Cart/Cart";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { customTheme, customerTheme } from "../Admin/them/customeThem";
import Navigation from "../Customer/components/Navigation/Navigation";
import HomePage from "../Customer/pages/HomePage/HomePage";
import About from "../Customer/pages/About";
import PrivacyPolicy from "../Customer/pages/PrivacyPolicy";
import Contact from "../Customer/pages/Contact";
import Product from "../Customer/components/Product/Product";
import ProductDetails from "../Customer/components/Product/ProductDetails";
import Cart from "../Customer/components/Cart/Cart";
import Order from "../Customer/components/Order/Order";
import OrderDetails from "../Customer/components/Order/OrderDetails";
import Checkout from "../Customer/components/Checkout/Checkout";
import PaymentSuccess from "../Customer/Payment/PaymentSuccess";
import RateProduct from "../Customer/reviewProduct/RateProduct";


const CustomerRoutes = () => {
    const location = useLocation();
    
  
    // Only show Navigation component when not on the NotFound page
    const showNavigation = location.pathname !== "*";

    // const path=["/","/home","/about","/privacy-policy","/terms-condition","/contact","/men",`/product/${productId}`]
  return (
    <div>
    
    <ThemeProvider theme={customerTheme}>
    {showNavigation && <Navigation />}
     <Routes>
     <Route path="/login" element={<HomePage />}></Route>
     <Route path="/register" element={<HomePage />}></Route>

        <Route path="/" element={<HomePage />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/privaciy-policy" element={<PrivacyPolicy />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/:levelOne/:levelTwo/:levelThree" element={<Product />}></Route>
        <Route path="/product/:productId" element={<ProductDetails />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/account/order" element={<Order/>}></Route>
        <Route path="/account/order/:orderId" element={<OrderDetails />}></Route>
        <Route path="/account/rate/:productId" element={<RateProduct />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/payment/:orderId" element={<PaymentSuccess />}></Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </ThemeProvider>
      
    </div>
  );
};

export default CustomerRoutes;
