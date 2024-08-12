import React, { useContext, useEffect } from 'react';
import { StoreContext } from '../Context/StoreContext';
import Navbar from '../components/Navbar';

const Cart = () => {
  const { cartItems, food_list, setCartItems } = useContext(StoreContext);
  const cartKeys = Object.keys(cartItems);

  useEffect(() => {
    console.log("cartItems", cartItems);
  }, [cartItems]);

  // Logika untuk menghitung total harga keseluruhan
  const calculateTotal = () => {
    return cartKeys.reduce((total, key) => {
      const find = food_list.find(item => item._id === key);
      return total + (find.price * cartItems[key]);
    }, 0);
  };

  const totalPrice = calculateTotal();

  const deleteCart = (id) => {
    setCartItems((prev) => {
      const newCart = { ...prev };
      delete newCart[id];
      return newCart; // Tambahkan return statement untuk memperbarui state
    });
  };

  return (
    <div className='w-10/12 xsm:w-11/12 mx-auto mt-6'>
      <Navbar />
      {cartKeys.length === 0 ? (
        <div className='text-center mt-16 flex justify-center items-center h-screen -translate-y-20'>
          <p className='text-2xl font-bold'>Tidak ada List Makanan di keranjangmu!</p>
        </div>
      ) : (
        <>
          <table className='min-w-full bg-white mt-12'>
            <thead>
              <tr className='w-full bg-gray-200 text-left text-sm leading-5 text-gray-800 uppercase'>
                <th className='px-4 py-3'>Items</th>
                <th className='px-4 py-3'>Name</th>
                {
                  window.innerWidth <=760 ? " ":
                  <>
                  
                    <th className='px-4 py-3'>Quantity</th>
                    <th className='px-4 py-3'>Price</th>
                  </> 
                }
                <th className='px-4 py-3'>Total</th>
                <th className='px-4 py-3'>Remove</th>
              </tr>
            </thead>
            <tbody className='text-gray-700'>
              {food_list.map((item) => {
                if (cartKeys.includes(item._id)) {
                  return (
                    <tr key={item._id} className='border-b'>
                      <td className='px-4 py-3'>
                        <img src={item.image} alt={item.name} className='w-16 h-16 object-cover' />
                      </td>
                      <td className='px-4 py-3'>{item.name}</td>
                      <td className='px-4 py-3'>{cartItems[item._id]}</td>
                      {
                        window.innerWidth <=760 ? " " : 
                        <>
                        
                        <td className='px-4 py-3'>${item.price}</td>
                        <td className='px-4 py-3'>${(item.price * cartItems[item._id]).toFixed(2)}</td>
                        </>

                      }
                      <td className='px-4 py-3'>
                        <button className='text-red-500' onClick={() => deleteCart(item._id)}>Remove</button>
                      </td>
                    </tr>
                  );
                }
                return null;
              })}
            </tbody>
          </table>

          <div className='w-full mb-5 flex gap-20 xsm:gap-9 mt-5 '>
            <div className='w-9/12 pr-20 xsm:pr-0 xsm:text-sm'>
              <h1 className='font-bold leading-10 xsm:leading-none overflow-hidden text-xl'>Cart Totals</h1>
              <div className='py-2 leading-6 flex justify-between'>
                <p>SubTotal</p>
                <p>${totalPrice.toFixed(2)}</p>
              </div>
              <hr />
              <div className='flex py-2 leading-6 justify-between'>
                <p>Delivery Fee</p>
                <p>$20.00</p>
              </div>
              <hr />
              <div className='py-2 flex justify-between'>
                <p>Total</p>
                <p>${(totalPrice + 20).toFixed(2)}</p>
              </div>
            </div>

            <div className='w-6/12 xsm:w-fit xsm: pl-20 xsm:pl-0 xsm:text-sm'>
              <p className='xsm:mb-3'>If you have a promo code, enter here</p>
              <div className='w-full'>
                <input type='text' className='w-9/12 xsm:w-full bg-gray-200 py-1 outline-none px-2' placeholder='Promo code' />
                <button className='text-white xsm:mt-3 bg-black py-1 px-5'>Submit</button>
              </div>
            </div>
          </div>
          <div className="w-full mt-10 mb-5">
  <button className="bg-orange-600 rounded-2xl w-10/12  text-white p-2 mx-auto block">Proses To checkout</button>
</div>


        </>
      )}
    </div>
  );
};

export default Cart;
