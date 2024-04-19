import React from "react";
import{ useNavigate} from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({product}) => {

    const navigate= useNavigate();
    const { title, brand, imageUrl, price ,discountedPrice,color,discountPercent} = product;

    const handleNavigate=()=>{
        navigate(`/product/${product?.id || product?._id || 2}`)
      }
    

    return (
        <div onClick={handleNavigate} className='productCard w-[15rem] m-3 transition-all cursor-pointer'>
            <div className='h-[20rem]'>
                <img className='h-full w-full object-cover object-left-top' src={imageUrl} alt="" />
            </div>
            <div className='textpart bg-white p-3'>
                <div>
                    <p className='font-bold opacity-60'>{brand}</p>
                    <p>{title}</p>
                    <p className='font-semibold opacity-50'>{color}</p>
                </div>
                <div className='flex items-center space-x-2'>
                <p className='font-semibold'>{discountedPrice}</p>
                <p className='line-through opacity-50'>{price}</p> 
                <p className='text-green-600 font-semibold'>{discountPercent}%off</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;