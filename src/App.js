import './App.css';
import Footer from './customer/Components/footer/Footer';
import Navigation from './Customer/components/Navigation/Navigation';
//import HomePage from './Customer/pages/HomePage/HomePage';
//import Product from './Customer/components/Product/Product';
import Cart from './Customer/components/Cart/Cart';
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
      <Footer />
    </div>
  );
}

export default App;
