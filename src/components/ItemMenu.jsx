import React, { useContext } from 'react'
import rating from '../../src/assets/rating_starts.png'
import addwhite from '../../src/assets/add_icon_white.png'
import addwGreen from '../../src/assets/add_icon_green.png'
import removeRed from '../../src/assets/remove_icon_red.png'


import food1 from '../../src/assets/food_1.png'
import { StoreContext } from '../Context/StoreContext'

const ItemMenu = (props) => {
    const {id, price, description, image, name} = props
    const {cartItems, addToCart, removeFromCart} = useContext(StoreContext)

  return (
    <div className='w-52 mt-7-center gap-4 xsm:w-40 xsm:flex-1 xsm:basis-40' id='itemmenu'>
        <div>
            <div className='relative'>
                <img src={image} className="" alt="" />
                {
                    !cartItems[id] ? <img onClick={()=> addToCart(id)} src={addwhite} alt="" className='absolute bottom-2 right-2 cursor-pointer'/>
                    : <div className='absolute bottom-2 right-2 flex items-center bg-white rounded-full gap-2'>
                        <img className='cursor-pointer' src={removeRed} alt="" onClick={()=> removeFromCart(id)}/>
                        <p>{cartItems[id]}</p>
                        <img src={addwGreen} className='cursor-pointer' onClick={()=>addToCart(id)} alt="" />
                    </div> 
                }
            </div>
            <div className='flex flex-col gap-3 mt-3 w-11/12 mx-auto'>
                <div className='flex justify-between h-fit items-center'>

                    <p className=' xsm:text-[11.5px] text-xs font-bold'>{name}</p>
                    <img className='xsm:w-3/12 w-16  overflow-hidden' src={rating} alt="" />
                </div>
                <p className='text-xs'>{description}</p>
                <p className='text-sm font-bold text-red-600'>$ {price}</p>

            </div>
        </div>
    </div>
)
}

export default ItemMenu