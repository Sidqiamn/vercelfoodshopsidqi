import React, { useContext, useEffect } from 'react'
import logo from '../../src/assets/logo.png'
import search from '../../src/assets/search_icon.png'
import basket from '../../src/assets/basket_icon.png'
import { StoreContext } from '../Context/StoreContext'
import { Link } from 'react-router-dom'
import arrow from '../../src/assets/arrow.png'

const Navbar = () => {


  const {cartItems} = useContext(StoreContext)

  const total = Object.values(cartItems).reduce((acc, item) => acc + item, 0);
  console.log(total)
  return (
    <div className='flex justify-between items-center border-b-4 border-opacity-50 pb-5' id='kembali'>
        <div id='left ' className='overflow-hidden'>
          <Link to="/" className='text-orange-500 font-bold text-4xl xsm:text-2xl overflow-hidden'>foodQi</Link>
        </div>
        <div className='flex gap-10 mr-10 xsm:hidden'>
           <Link to={'/'}><p>home</p> </Link> 
            <a href="#itemmenu">menu</a>
            <a href="#mobile">mobile app</a>
            <a href="#contact">contact us</a>
        </div>
        <div id='right' className='flex gap-12 items-center '>
            <img src={search} alt="" className='w-8 h-8 xsm:w-6 xsm:h-6'/>
            <Link to={'/cart'}>
              <div className='relative cursor-pointer flex' >

                  <img src={basket} alt="" className='w-8 h-8 xsm:w-6 xsm:h-6'/>
                  <span className='  -right-5 text-white -top-1 bg-red-500 px-1 h-fit text-xs rounded-full '>{total} </span>
        
               </div>
            </Link>  
            <p className=' rounded-xl px-5 py-2 xsm:px-3 xsm:py-1 transition-all duration-500 border cursor-pointer hover:bg-orange-500 hover:text-white border-zinc-800'>Sign in</p>
        </div>
        <div className='fixed bottom-10 right-5 z-50 bg-orange-500 rounded-full p-2 hover:bg-orange-700 transition-all duration-300'>
          <a href="#kembali"><img className='h-16' src={arrow} alt="" /></a>
        </div>
    </div>
  )
}

export default Navbar