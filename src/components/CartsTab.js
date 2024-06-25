import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItems from "./CartItems";
import { toggleStatusTab } from "../stores/Cart";


export default function CartsTab(){
    const carts = useSelector(store => store.cart.items)
    const TabStatus = useSelector(store => store.cart.TabStatus)
    const dispatch = useDispatch();

    function handleCloseTab(){
        dispatch(toggleStatusTab());
    }
    return(
        <div className={`fixed top-0 right-0 bg-white shadow-2xl w-96 h-full grid grid-rows-[60px_1fr_60px] transform transition-transform duration-500 ${TabStatus === false ? "translate-x-full" : ""}`}>
        <h2 className="p-5 text-black text-2xl">Shopping cart</h2>
        <div className="p-5">
        {carts.map((item,key)=>
            <CartItems data={item} key={key} />
        )}
        </div>
        <div className="grid grid-cols-2">
        <button className="bg-black text-white" onClick={handleCloseTab}>CLOSE</button>
        <button className="bg-green-500 text-black">CHECKOUT</button>
        </div>
        </div>
    )
}