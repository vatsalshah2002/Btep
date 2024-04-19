import React from "react";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';

const steps = [
    "Placed",
    'Order Confirmed',
    'Shipped',
    'Out For Delivery',
    'Delivered'
  ];

  
const OrderTracker = () => {
    return(
        <div className='w-full'>
         <Stepper activeStep={activeStep} alternativeLabel>
         {steps.map((label) => (
          <Step key={label}>
            <StepLabel  sx={{ color: '#9155FD',fontSize: '44px' }}  className={``}>{label}</StepLabel>
          </Step>
        ))}
         </Stepper>

        </div>

    )
}

export default OrderTracker;