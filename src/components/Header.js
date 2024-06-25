import React from "react";
import { Link} from "react-router-dom";
import iconcart from "../assets/images/iconCart.png";
import { useState, useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { toggleStatusTab } from "../stores/Cart";

export default function Header(){
    const [totalqty,setTotalqty] = useState(0);
    const carts = useSelector(store => store.cart.items);
    const dispatch = useDispatch();
    useEffect(()=>{
        let total = 0;
        carts.forEach(item => total += item.quantity);
        setTotalqty(total);
    },[carts]);

    function handleOpenTab(){
        dispatch(toggleStatusTab());
    }
    return(
        <header className="flex justify-between items-center mb-5">
            <Link to="/" className="text-xl font-semibold">Home.</Link>
            <div className="w-10 h-10 bg-gray-100 rounded-full flex justify-center items-center relative" onClick={handleOpenTab}>
                <img src={iconcart} alt="" className="w-6" />
                <span className="absolute top-2/3 right-1/2 bg-green-500 text-white text-sm w-5 h-5 rounded-full flex justify-center items-center">{totalqty}</span>
            </div>
        </header>
    )
}