import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { imageURL } from '../utils/constants';
import { clearCart } from '../utils/cartSlice';

function Cart() {
    const cartItems = useSelector((store)=>store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = ()=>{
        dispatch(clearCart());
    }
  return (
        <div className='text-center m-4 p-4'>
                <h1 className='text-3xl font-bold'>Cart</h1>
                
                {
                    cartItems.length ===0 ? 
                        <h1 className='text-2xl font-bold text-red-500'>No Items In The Cart</h1> :
                        <button className='p-2 m-2 bg-black text-white rounded-lg' onClick={handleClearCart}>Clear Cart</button>
                }
                {cartItems.map((item)=>(
                    <div className="flex justify-between items-center mb-4 border border-b-slate-100 p-2">
                        <div className="w-[70%]">
                           <h3 className="font-bold">{item?.card?.info?.name}</h3>
                           {item?.card?.info?.price ? <h3>Rs {item?.card?.info?.price/100}</h3> : <h3>Rs {item?.card?.info?.defaultPrice/100}</h3> }
                           <h4>{item?.card?.info?.description}</h4>
                        </div>
                        <div className="flex flex-col relative">
                            {item?.card?.info?.imageId && <img alt="menu item" className="" src={imageURL + item?.card?.info?.imageId}/>} 
                        </div>
                </div>
                ))}
                
        </div>
  )
}

export default Cart