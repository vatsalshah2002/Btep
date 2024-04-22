import './App.css';

import Navigation from './Customer/components/Navigation/Navigation';
//import HomePage from './Customer/pages/HomePage/HomePage';
//import Product from './Customer/components/Product/Product';
import Cart from './Customer/components/Cart/Cart';
//import Footer from './Customer/Components/footer/Footer';

//import Checkout from './Customer/components/Checkout/Checkout';

function App() {
  return (
    <div className="">
      <Navigation />
      <div>
        {/*<HomePage /> */}
        {/* <Product/> */}
        {/* <Product Details/> */}
         <Cart/> 
        {/* <Checkout/> */}
      </div>
     
      
         </div>
  );
}

export default App;
