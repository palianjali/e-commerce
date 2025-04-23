import React, { useState } from 'react'

const Login = () => {

  const [currentState, setCurrentState] = useState('Sign Up');

  const onSubmitHandler = async(e)=>{
    e.preventDefault();

  }
  return (
    <form onSubmit={onSubmitHandler}
      className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-black'
    >
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>

      {currentState === 'Login' ? '' :
        <input type="text"
          className='w-full py-2 border border-b-gray-800'
          placeholder='Name'
        />
      }


      <input type="email"
        className='w-full py-2 border border-b-gray-800'
        placeholder='Email'
      />

      <input type="password"
        className='w-full py-2 border border-b-gray-800'
        placeholder='Password'
      />
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Forgot your password?</p>
        {
          currentState === 'Login'
          ? <p 
          onClick={()=>setCurrentState('Signup')}
          className='cursor-pointer'>Create account</p>
          :<p 
          onClick={()=>setCurrentState('Login')}
          className='cursor-pointer'>Login Here</p>
        }
      </div>
      <button
      className='bg-black text-white font-light py-2 px-8 mt-4'
      >

        {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
      </button>
    </form>
  )
}

export default Login
