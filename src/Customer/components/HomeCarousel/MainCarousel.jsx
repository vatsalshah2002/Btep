import React from 'react'
import {mainCarouselData } from './MainCarouselData';
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';
import { useNavigate } from "react-router-dom";

const handleDragStart = (e) => e.preventDefault();

const MainCarousel = () => {
  const navigate = useNavigate();
    const items = mainCarouselData.map((item) => (<img 
    className='cursor-pointer'    onClick={() => navigate(item.path)}
    role='presentation' src={item.image} alt=""
    onDragStart={handleDragStart}
    
    />));

    return (
      <AliceCarousel
       items={items}
       disableButtonsControls
       autoPlay
       autoPlayInterval={1000}
        infinite
       />
      )
}
   
export default MainCarousel;

 
   