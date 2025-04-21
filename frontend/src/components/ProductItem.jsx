
import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';

const ProductItem = ({ id, name, image, price, subCategory }) => {
  const {currency} = useContext(ShopContext);
  return (
<Link
className='text-gray-700 cursor-pointer block'
to={`/product/${id}`}
>

<div className='h-80 flex flex-col items-center text-center bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition hover:scale-105'>

<div className='w-[150px] h-[150px] overflow-hidden mb-3'>
  <img 
    src={image} 
    alt={name} 
    className='w-full h-full  rounded-md'
  />
</div>

<p className='font-semibold text-sm'>{name}</p>
<p className='text-gray-600 text-xs'>${price}</p>
<p className='text-gray-600 text-xs'>{subCategory}</p>

</div>

</Link>
  )
}


export default ProductItem
