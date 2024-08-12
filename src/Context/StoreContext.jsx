import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";


export const StoreContext = createContext(null)


const StoreContextProvider =(props) =>{
    const [cartItems, setCartItems] =useState({})
    const [categoryItems, setCategoryItems] = useState("ada")
    const addToCart =(itemsId)=>{
            setCartItems(prev=>({...prev,[itemsId] :(prev[itemsId] || 0)+1}))
        
    }
    
    const removeFromCart =(itemsId)=>{
        setCartItems(prev=>{
            let newCart = {...prev}
            if (newCart[itemsId]>1) {
                newCart[itemsId] -=1
            } else{
                delete newCart[itemsId]
            }
            return newCart
        })
    }

    const totalvalues =()=>{
        return Object.values(cartItems).reduce((acc, num) => { return acc + num }, 0);

    }
    const total = totalvalues()

    useEffect(() => {
        console.log('toal',cartItems)
    }, [cartItems]);

    const contextValue ={
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        totalvalues, 
        total,
        categoryItems,
         setCategoryItems
        
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider
