import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
      <div>
        <img src={assets.exchangeicon} alt="" 
        className='w-12 m-auto mb-5' />
        
        <p className='font-semibold t'>Easy Exchenge Policy</p>
        <p className='text-gray-400'>We offer hassle free exchange policy</p>
      </div>

      <div>
        <img src={assets.quality}
        className='w-12 m-auto mb-5'
        alt="" />
        <p className='font-semibold t'>7 Days Return Policy</p>
        <p className='text-gray-400'>We provide 7 days free return policy</p>
      </div>

      <div>
        <img src={assets.support} alt="" 
        className='w-12 m-auto mb-5'
        />
        <p className='font-semibold t'>Best customer supportt</p>
        <p className='text-gray-400'>We provide 24/7 customer service</p>
      </div>
    </div>
  )
}

export default OurPolicy
