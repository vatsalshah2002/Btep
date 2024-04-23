import Admin from './Admin/Admin';
import './App.css';

import Navigation from './Customer/components/Navigation/Navigation';
//import Order from './Customer/components/Order/Order';
//import HomePage from './Customer/pages/HomePage/HomePage';
//import Product from './Customer/components/Product/Product';
//import ProductDetails from './Customer/components/Product/ProductDetails';
//import Cart from './Customer/components/Cart/Cart';
//import Footer from './Customer/Components/footer/Footer';

//import Checkout from './Customer/components/Checkout/Checkout';

function App() {
  return (
    <div className="">
      <Navigation />
      <div>
        {/*<HomePage /> */}
        <Admin/>
         {/*<Product/>*/} 
         {/*<Product Details/>*/} 
         {/*<ProductDetails/>*/}
        {/* <Order/>*/} 
        {/*<Cart/>*/ } 
         {/*<Checkout/>*/} 
      </div>
     
      
         </div>
  );
}

export default App;
