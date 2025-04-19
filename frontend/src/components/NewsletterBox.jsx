import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { use } from 'react';

const NewsletterBox = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  

    const onSubmitHandler = async(e) =>{
        e.preventDefault();
      try{
        const res = await axios.post('http://localhost:5000/api/subscribe', {email})
        setMessage(res.data.message)
        setEmail('')
       navigate('/about')

      }
      catch(err){
        setMessage(err.response?.data?.message || 'Something went Wrong')
        console.log(err);
        
      }
    }
  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>Subscribe now and get 20% off</p>
      <p className='text-gray-400 mt-3'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis nostrum veniam veritatis error eligendi quo adipisci libero quibusdam reiciendis quod, inventore ex excepturi iure praesentium, facere pariatur soluta laborum ea.
      </p>
      <form onSubmit={onSubmitHandler}
      className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'
      >
        <input 
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        placeholder='Enter your email'
        className='w-full sm:flex-1 outline-none'
        required
        />
        <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
      </form>
      {message && <p className='mt-4 text-sm text-green-400'>{message}</p>}
    </div>
  )
}

export default NewsletterBox
