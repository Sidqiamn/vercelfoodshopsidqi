import React, { useContext, useEffect } from 'react'
import menu1 from '../../src/assets/menu_1.png'
import menu2 from '../../src/assets/menu_2.png'
import menu3 from '../../src/assets/menu_3.png'
import menu4 from '../../src/assets/menu_4.png'
import menu5 from '../../src/assets/menu_5.png'
import menu6 from '../../src/assets/menu_6.png'
import menu7 from '../../src/assets/menu_7.png'
import menu8 from '../../src/assets/menu_8.png'
import { menu_list } from '../assets/assets'
import { StoreContext } from '../Context/StoreContext'


const HeaderMenu = () => {
    // console.log("menuList",menu_list)
    const {categoryItems, setCategoryItems} =useContext(StoreContext)

    useEffect(()=>{
        console.log("cattegory",categoryItems)
    },[categoryItems])
  return (
    <div>
        <div>
            
            <h1 className='font-semibold text-2xl mt-10 '>Explore our menu</h1>
            <h4 className='text-sm w-2/4 mt-5 xsm:w-full'>Lorem ipsum doloradicta. Adipisci esse modi eos earum incidunt laudantium facilis, pariatur, corrupti autem iusto similique expedita nostrum! Et, beatae!</h4>
        </div>
        <div className='mt-9 flex gap-7 xsm:flex-wrap xsm:flex xsm:justify-center'>
     
            {
                menu_list.map((item, index)=>{
             return   <div onClick={()=> setCategoryItems(item.menu_name)} className='flex flex-col gap-3 justify-center items-center cursor-pointer' >
                    <img className='xsm:flex-1 xsm:basis-25' src={item.menu_image} alt="" />
                    <p className='font-light xsm:text-base'>{item.menu_name}</p>
                </div>        
                })
            }
         
        </div >
        <h1 onClick={()=>setCategoryItems('ada')} className='mt-4 font-semibold xsm:mx-auto xsm:mt-10 xsm:w-1/2 text-center cursor-pointer bg-orange-400 rounded-2xl px-3 py-1 w-fit hover:bg-black hover:text-white hover:duration-500 xsm:self-center '>Show All Menu</h1>
        <hr className='mt-12 mb-12 border-b border-gray-300'/>
        <h1 className='font-semibold text-2xl'>Top dishes near you</h1>

    </div>
  )
}

export default HeaderMenu