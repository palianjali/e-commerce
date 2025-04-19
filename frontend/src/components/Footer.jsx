

import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='bg-[#041222]  pt-10 items-center justify-center flex'>
        <div className='flex flex-col items-center text-center sm:grid sm:grid-cols-[3fr_1fr_1fr] sm:text-left sm:items-start gap-14 my-10 mx-5 text-sm'>

          {/* Logo and description */}
          <div>
            <img src={assets.logo2} alt="logo" className='mb-4 w-32 mx-auto sm:mx-0' />
            <p className='w-full md:w-2/3 text-gray-500 mx-auto sm:mx-0'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quas deleniti, iure tenetur eos expedita earum quisquam natus quidem veritatis. Recusandae debitis nam aspernatur facere quos. Minus facere ipsam sequi?
            </p>
          </div>

          {/* Company Links */}
          <div>
            <p className='text-xl font-medium mb-5 text-white'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-500'>
              <li>Home</li>
              <li>About us</li>
              <li>Delivery</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <p className='text-xl font-medium mb-5 text-white'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-500'>
              <li>+91 897456321</li>
              <li>onlineshop@forever.com</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer

