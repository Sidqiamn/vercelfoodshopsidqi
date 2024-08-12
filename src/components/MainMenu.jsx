import React, { useContext, useState } from 'react'
import ItemMenu from './ItemMenu'
import { StoreContext } from '../Context/StoreContext'



const MainMenu = () => {
  const {food_list, categoryItems} = useContext(StoreContext)
  
  return (
    <div className='flex flex-wrap gap-4 justify-between'>
      {
        food_list.map((item,index)=>{
          if(categoryItems == item.category){
          
            return <ItemMenu key={index} category={item.category} id={item._id} name={item.name} image={item.image} price={item.price} description={item.description}></ItemMenu>
          } else if (categoryItems == 'ada'){
            return <ItemMenu key={index} category={item.category} id={item._id} name={item.name} image={item.image} price={item.price} description={item.description}></ItemMenu>
            
          }

        })
      }
  </div>
  )
}

export default MainMenu