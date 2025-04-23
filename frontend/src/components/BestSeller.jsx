import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {

    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        const bestProduct = products.filter((item) => (item.bestseller));
        setBestSeller(bestProduct.slice(0, 5 ))
    }, [])
    return (
        <div className='my-10'>
            <div className='text-center text-3xl py-8'>
                <Title text1={'BEST'} text2={'SELLERS'} />
                <p
                    className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam laboriosam, itaque ullam ut sunt, placeat vel cupiditate doloremque veritatis accusantium distinctio, repellat tempore possimus facilis. Suscipit nostrum quod adipisci necessitatibus?</p>
            </div>

            <div 
            className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 gap-y-6'>
                {
                    bestSeller.map((item,index) =>(
                        <ProductItem key={index} id={item.id} name={item.name} image={item.image[0]} price={item.price} subCategory={item.subCategory}/>
                    ))
                }
            </div>
        </div>
    )
}

export default BestSeller
