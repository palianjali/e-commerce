import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Collection from './pages/Collection'
import About from './pages/About'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Product from './pages/Product'
import PlaceOrder from './pages/PlaceOrder'
import Navbar from './components/Navbar'
import Orders from './pages/Orders'
import Footer from './components/Footer'


const App = () => {
  return (
   <div className='flex flex-col gap-10'>
     <div className='px-4 sm:px-[5vw] md:px-[7vw] lg-[9vw]'>
   
      <div className="pt-0 w-full"> {/* Adjust based on your navbar height */}
  {/* Page content goes here */}
     
  <Navbar />
</div>
     <Routes>

        <Route path='/' element={<Home />}/>
        <Route path='/collection' element={<Collection />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/orders' element={<Orders />}/>
        <Route path='/product/:_id' element={< Product/>}/>
        <Route path='/place-order' element={<PlaceOrder />}/>
       </Routes>
       
       
       
    </div>
    <Footer/>
   </div>
  )
}

export default App
