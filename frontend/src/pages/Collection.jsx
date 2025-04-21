import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';


const Collection = () => {

  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts,setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

  const toggleCategory = (e) =>{

    const value = e.target.value;
    if(category.includes(value)){
      setCategory(prev=> prev.filter(item => item !== e.target.value))
    }

    else{
      setCategory(prev => [...prev, value])
    }
  }

  const toggleSubCategory = (e) =>{
    const value = e.target.value

    if(category.includes(value)){
      setSubCategory(prev=> prev.filter(item => item !== e.target.value))
    }

    else{
      setSubCategory(prev => [...prev, value])
    }
  }

  const applyFilter = () =>{
    let productsCopy = products.slice();

    if(category.length > 0){
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }
    setFilterProducts(productsCopy)
  }

  useEffect(()=>{
    setFilterProducts(products);
  },[])

  useEffect(()=>{
    console.log(subCategory);
    
  },[subCategory])

  useEffect(() =>{
    applyFilter();
  }, [category,subCategory])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

      {/* Filter Options */}

      <div className='min-w-60'>
        <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img src={assets.drop_down_icon} alt="" 
          className={`h-6 sm:hidden ${showFilter ? 'rotate-90': ''}`}
          />
        </p>
        {/* Category Filter */}

        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input type="checkbox"
                className='w-3'
                value={'Men'}
                onChange={toggleCategory}
              />Men
            </p>
            <p className='flex gap-2'>
              <input type="checkbox"
                className='w-3'
                value={'Women'}
                onChange={toggleCategory}
              />Women
            </p>
            <p className='flex gap-2'>
              <input type="checkbox"
                className='w-3'
                value={'Kids'}
                onChange={toggleCategory}
              />Kids
            </p>
          </div>
        </div>
        {/* Subcategroy Filter */}
        <div className={`border border-gray-300 pl-5 py-3  my-5  ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>SUB-CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input type="checkbox"
                className='w-3'
                value={'Topwear'}
                onChange={toggleSubCategory}
             
              />Topwear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox"
                className='w-3'
                value={'Bottomwear'}
                onChange={toggleSubCategory}
              />Bottomwear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox"
                className='w-3'
                value={'Winterwear'}
                onChange={toggleSubCategory}
              />Winterwear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox"
                className='w-3'
                value={'Midi'}
                onChange={toggleSubCategory}
              />Midi
            </p>
          </div>
        </div>
      </div>

      {/* Right side  */}

      <div className='flex-1'>

        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={"All"} text2={"Collections"}/>
          {/* Product Sort */}
          <select
          className='border border-gray-300 text-sm px-2'
          >
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-high">Sort by: Low to  High</option>
            <option value="high to low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Map Products */}
        <div className='grid gridcols2 md:grid-cols-3 lg:grid-cols-5 gap-4 gap-y-6 sm:gap-7'>
          {
            filterProducts.map((item,index)=>(
              <ProductItem key={index} name={item.name} id={item.id} price={item.price} image={item.image}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Collection
