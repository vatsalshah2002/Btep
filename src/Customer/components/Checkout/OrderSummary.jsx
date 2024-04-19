import React from "react";
import { Button } from "@mui/material";
import CartItem from "../Cart/CartItem";
import AddressCard from "../AddressCard/AdressCard";

const OrderSummary = () => {

  return (
    <div className="space-y-5">
        <div className="p-5 shadow-lg rounded-md border ">
            <AddressCard />
        </div>
        <div className="">
     <div className="lg:grid grid-cols-3 relative">
        <div className="col-span-2">
        
          {[1,1,1,1].map((item) => (
            <>
              <CartItem />
            </>
          ))}
        
      </div>
      <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 ">
        <div className="border p-5 bg-white shadow-lg rounded-md">
          <p className="font-bold opacity-60 pb-4">PRICE DETAILS</p>
          <hr />

          <div className="space-y-3 font-semibold">
            <div className="flex justify-between pt-3 text-black ">
              <span>Price </span>
              <span>₹4697</span>
            </div>
            <div className="flex justify-between">
              <span>Discount</span>
              <span className="text-green-700">-₹3419</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Charges</span>
              <span className="text-green-700">Free</span>
            </div>
            <hr />
            <div className="flex justify-between font-bold text-lg">
              <span>Total Amount</span>
              <span className="text-green-700">₹1278</span>
            </div>
          </div>

          <Button
            
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
