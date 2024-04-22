import React from "react";
import { Button } from "@mui/material";
import CartItem from "../Cart/CartItem";
import AddressCard from "../AddressCard/AdressCard";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createPayment } from "../../../Redux/Customer/Payment/Action";
import { getOrderById } from "../../../Redux/Customer/Order/Action";

const OrderSummary = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("order_id");
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { order } = useSelector(state => state);

  useEffect(() => {

    dispatch(getOrderById(orderId))
  }, [orderId])

  const handleCreatePayment = () => {
    const data = { orderId: order.order?.id, jwt }
    dispatch(createPayment(data))
  }


  return (
    <div className="space-y-5">
        <div className="p-5 shadow-lg rounded-md border ">
            <AddressCard address={order.order?.shippingAddress} />
        </div>
        <div className="">
     <div className="lg:grid grid-cols-3 relative">
     <div className=" space-y-3">
            {order.order?.orderItems.map((item) => (
              <>
                <CartItem item={item} showButton={false}/>
              </>
            ))}
          </div>
      <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 ">
        <div className="border p-5 bg-white shadow-lg rounded-md">
          <p className="font-bold opacity-60 pb-4">PRICE DETAILS</p>
          <hr />

          <div className="space-y-3 font-semibold">
            <div className="flex justify-between pt-3 text-black ">
            <span>Price ({order.order?.totalItem} item)</span>
                <span>₹{order.order?.totalPrice}</span>
            </div>
            <div className="flex justify-between">
            <span>Discount</span>
                <span className="text-green-700">-₹{order.order?.discount}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Charges</span>
              <span className="text-green-700">Free</span>
            </div>
            <hr />
            <div className="flex justify-between font-bold text-lg">
              <span>Total Amount</span>
              <span className="text-green-700">₹{order.order?.totalDiscountedPrice}</span>
            </div>
          </div>

          <Button
             onClick={handleCreatePayment}
            variant="contained"
            className="w-full mt-5"
            type="submit"
            sx={{ px: "2.5 rem", py:".7 rem",  }}
          >
            Check Out
          </Button>
        </div>
      </div>
      </div>
      
    </div>
      
    </div>
  );
};

export default OrderSummary;
