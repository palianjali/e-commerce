import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
// import MenuIcon from '@mui/icons-material/Menu'


const Navbar = () => {

    const [visible, setVisible] = useState(false);
    const{setShowSearch, getCartCount} = useContext(ShopContext);

    return (
        <div className='flex items-center justify-between font-medium'>

          <Link
            to='/'
            >
            <img src={assets.logo}
                className='w-36'
                alt="" />
            </Link>

            <ul className='hidden sm:flex gap-5 text-xl  text-gray-700'>
                <NavLink
                    to='/'
                    className='flex flex-col items-center gap-1 hover:border-1 border-black'>
                    <p>
                        HOME
                    </p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink
                    to='/collection'
                    className='flex flex-col items-center gap-1'>
                    <p>
                        COLLECTION
                    </p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>

                <NavLink
                    to='/about'
                    className='flex flex-col items-center gap-1'>
                    <p>
                        ABOUT
                    </p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>

                <NavLink
                    to='/contact'
                    className='flex flex-col items-center gap-1'>
                    <p>
                        CONTACT
                    </p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>

            </ul>
  


            <div className='flex items-center gap-6'>
                <img src={assets.search_icon} alt=""
                onClick={()=>setShowSearch(true)}
                    className='w-7 cursor-pointer'
                />

                <div className='group relative'>
                    <img src={assets.profile} alt=""
                        className='w-7 cursor-pointer'
                    />

                    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                        <div className='flex flex-col gap-2 w-36 py-3 bg-slate-100 text-gray-500 roundedb text-center'>
                            <p className='cursor-pointer hover:text-black'>My Profile</p>
                            <p className='cursor-pointer hover:text-black'>Orders</p>
                            <p className='cursor-pointer hover:text-black'>Logout</p>
                        </div>
                    </div>
                </div>

                <Link
                    to='/cart' className='relative'
                >
                    <img src={assets.cart} alt=""
                        className='w-7 min-w-5'
                    />
                    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>
                        {getCartCount()}
                    </p>
                </Link>
                <img
                    onClick={() => setVisible(true)}
                    src={assets.menu2} alt=""
                    className='w-7 sm:hidden cursor-pointer'
                />
            </div>
                {/* sidebar menu for small screens */}
            <div
            className={`absolute 
                top-0
                right-0
                bottom-0
                overflow-hidden
                bg-white
                transition-all
                ${visible ? 'w-full' : 'w-0'}
                `} 
            >
            
                <div className='flex flex-col text-gray-700'>
                    <div onClick={()=>setVisible(false)} className='flex  items-center gap-4 p-3 cursor-pointer'>
                        {/* <img src={assets.menu} alt="" 
                        className='h-4 rotate-180'
                        /> */}
                        <p className='sm:hidden'>Back</p>
                    </div>
                   
                        <NavLink onClick={()=>setVisible(false)} to='/' className='py-2 pl-6 border'>Home</NavLink>
                        <NavLink onClick={()=>setVisible(false)} to='/collection' className='py-2 pl-6 border'>COLLECTION</NavLink>
                        <NavLink onClick={()=>setVisible(false)} to='/about' className='py-2 pl-6 border'>ABOUT</NavLink>
                        <NavLink onClick={()=>setVisible(false)} to='/contact' className='py-2 pl-6 border'>CONTACT</NavLink>
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar
