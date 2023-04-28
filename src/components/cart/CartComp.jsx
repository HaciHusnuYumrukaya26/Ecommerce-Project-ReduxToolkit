import React from 'react'
import { removeFromCart } from '../../redux/cartSlice'
import { useDispatch } from 'react-redux'

const CartComp = ({cart}) => {
    const dispatch=useDispatch();
    
  return (
    <div className='my-10 flex ms-6 me-6 items-center justify-between'>
    <img className='w-[150px] h-[150px] ' src={cart?.image} alt=''/>
    <div>
        <div className='max-w-[400px] text-center text-xl '>{cart?.title}</div>

    </div>
    <div>{cart?.price} TL ({cart?.quantity})</div>
    <div onClick={()=>dispatch(removeFromCart(cart?.id))}  className='bg-gray-500 flex items-center justify-center rounded-lg mt-2 hover:bg-gray-700 text-white w-[150px] h-16'>Ürünü Sil</div>
    </div>
  )
}

export default CartComp