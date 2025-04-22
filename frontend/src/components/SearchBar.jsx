import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import { useLocation } from 'react-router-dom'

const SearchBar = () => {

    const {search, setSearch, showSearch, setShowSearch} = useContext(ShopContext)

    const location = useLocation();

    const [visible, setVisible] = useState(false)

    useEffect(()=>{
        if(location.pathname.includes('collection')){
            setVisible(true);
        }
        else{
            setVisible(false)
        }
        
    },[location])
  return showSearch && visible ?(
    <div className='border-0 md:border rounded bg-gray-50  text-center md:border'>
      <div className='inline-flex items-center justify-center border border-gray-500 px-5 py-2 my-5 mx-3 rounded sm:w-1/2 h-12 gap-5'>
      <input type="text" 
      placeholder='Search'
      className='flex-1 outline-none bg-inherit text-sm'
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      />

      <img src={assets.search_icon} alt="" 
      className='w-4'
      />
      <img src={assets.cross_icon} alt="" 
      onClick={()=>setShowSearch()}
      className='inline w-5 cursor-pointer border-2 border-black rounded'
      />
      </div>
      
    </div>
  ) : null
}

export default SearchBar
