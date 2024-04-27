import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import CustomerRoutes from './Routers/CustomerRoutes';
import { getUser } from './Redux/Auth/Action';
import { useEffect } from 'react';
import Admin from './Admin/Admin';

function App() {
  const {auth}=useSelector(store=>store);
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt]);
  
  return (
    <div className="">
     <Routes>
     <Route path="/*" element={<CustomerRoutes />} />
     {auth.user?.role==="ROLE_ADMIN" && <Route path="/admin/*" element={<Admin />} />}
     </Routes>
     
    
         </div>
  );
}

export default App;
