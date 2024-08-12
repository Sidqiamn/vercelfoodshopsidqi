import React, { useContext } from 'react'
import logo from '../../src/assets/logo.png'
import search from '../../src/assets/search_icon.png'
import basket from '../../src/assets/basket_icon.png'
import { StoreContext } from '../Context/StoreContext'
import { Link } from 'react-router-dom'


const Navbar = () => {

  // const {totalvalues} =useContext(StoreContext)
  const {total, totalvalues} = useContext(StoreContext)
  console.log('totalValue',total)
  return (
    <div className='flex justify-between items-center'>
        <div id='left'>
            <p className='text-orange-500 font-bold text-4xl xsm:text-2xl'>foodQi</p>
        </div>
        <div className='flex gap-10 mr-10 xsm:hidden'>
           <Link to={'/'}><p>home</p> </Link> 
            <p>menu</p>
            <p>mobile app</p>
            <p>contact us</p>
        </div>
        <div id='right' className='flex gap-12 items-center '>
            <img src={search} alt="" className='w-8 h-8 xsm:w-6 xsm:h-6'/>
            <Link to={'/cart'}>
              <div className='relative cursor-pointer' >

                  <img src={basket} alt="" className='w-8 h-8 xsm:w-6 xsm:h-6'/>
                  <span className='absolute  -right-5 text-white -top-1 bg-red-500 px-1 text-xs rounded-full '>{total} </span> 
               </div>
            </Link>  
            <p className=' rounded-xl px-5 py-2 xsm:px-3 xsm:py-1 border border-zinc-800'>Sign in</p>
        </div>
    </div>
  )
}

export default Navbar