import React, { useContext, useEffect, useState } from 'react'

import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';




const LatestCollection = (props) => {
    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([])
    console.log(products);

    useEffect (()=>{
        setLatestProducts(products.slice(0));
    },[])


    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Title text1={'LATEST'} text2={'COLLECTIONS'}/>
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, dolores sint! Commodi cumque sunt eum debitis itaque odit, tenetur vitae qui suscipit! Eum ipsam ullam recusandae eveniet officia eius ut.
                </p>
            </div>
            {/* Rendering Products */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    latestProducts.map((item,index)=>(
                        <ProductItem key={index} id={item.id} image={item.image[0]} name={item.name} price={item.price} subCategory={item.subCategory}/>
                    ))
                }
            </div>
        </div>
    )
}

export default LatestCollection;
