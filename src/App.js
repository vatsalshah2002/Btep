
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import CustomerRoutes from './Routers/CustomerRoutes';



//import Order from './Customer/components/Order/Order';
//import HomePage from './Customer/pages/HomePage/HomePage';
//import Product from './Customer/components/Product/Product';
//import ProductDetails from './Customer/components/Product/ProductDetails';
//import Cart from './Customer/components/Cart/Cart';
//import Footer from './Customer/Components/footer/Footer';

//import Checkout from './Customer/components/Checkout/Checkout';

function App() {
  const {auth}=useSelector(store=>store);
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  
  return (
    <div className="">
     <Routes>
     <Route path="/*" element={<CustomerRoutes />} />
     </Routes>
     
    
         </div>
  );
}

export default App;
