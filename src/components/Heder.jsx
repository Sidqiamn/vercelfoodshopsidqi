import React from 'react'
import header from '../../src/assets/header_img.png'
import foodHead from '../../src/assets/foodJs.jpg'

const Header = () => {
  return (
    <div className='mt-10 relative' id='heder'>
        <img className="h-[30rem] w-full object-cover" src={foodHead} alt="" />
        <div className='absolute  w-3/4 left-28 bottom-10 flex flex-col gap-y-10 xsm:w-10/12 xsm:left-5'>
            <div>
                <h1 className=' bg-opacity-30 w-fit pr-2 font-bold font-poppins text-6xl overflow-hidden text-orange-400 xsm:text-3xl'>Order your</h1>
                <h1 className='text-white font-bold font-poppins text-3xl overflow-hidden'>Favourite Food Here</h1>
            </div>
            <div>
                <h4 className='text-white bg-black bg-opacity-20 xsm:w-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nobis aliquid voluptas nam, ratione vero ut esse doloremque illo tempore! Rerum facere consequatur repudiandae facilis voluptatibus ut veniam quia debitis!</h4>
            </div>
            <button className=' px-4 py-2 font-poppins rounded-lg self-start bg-orange-400 text-white font-semibold '>View Menu</button>
        </div>
    </div>
  )
}

export default Header