import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCartTotal } from "../redux/cartSlice";
import CartComp from "../components/cart/CartComp";

const Cart = () => {
  const dispatch = useDispatch();

  const { carts,totalAmount,itemCount } = useSelector((state) => state.carts);
  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);
  console.log(carts,itemCount,totalAmount)

  return <div>
    
    {
        carts?.length>0?<div>
            {
                carts?.map((cart,i)=>(
                     <CartComp key={i} cart={cart}/>
                ))
            }
       <div className="flex items-center text-2xl justify-end me-4">Toplam Tutar : <span className="font-bold text-2xl ms-1"> {Math.floor(totalAmount) } TL</span></div>
       <div onClick={()=>dispatch(clearCart())}  className='bg-gray-500 flex items-center justify-center rounded-lg mt-2 hover:bg-gray-700 text-white w-[150px] h-16'>Sepeti Temizle</div>

        </div>:
        <div>
            Kart boş
        </div>
    }
  </div>;
};

export default Cart;
