import React, { useState, useEffect } from "react";
import { products } from "../data/data";
import { changeQty } from "../stores/Cart";
import { useDispatch } from "react-redux";

export default function CartItems(props) {
    const { productId, quantity } = props.data;
    const [details, setDetails] = useState({});
    const dispatch = useDispatch();

    useEffect(() => {
        const findDetails = products.find((product) => product.id === productId);
        setDetails(findDetails);
    }, [productId]);

    function handleDecrement() {
        dispatch(changeQty({
            productId: productId,
            quantity: quantity - 1
        }));
    }

    function handleIncrement() {
        dispatch(changeQty({
            productId: productId,
            quantity: quantity + 1
        }));
    }

    return (
        <div className="flex justify-between items-center bg-green-500 text-white p-2 border-b-2 border-slate-700 gap-5 rounded-md">
            <img src={details.image} alt="" className="w-12" />
            <h3 className="text-black">{details.name}</h3>
            <div className="w-40 flex justify-between gap-2">
                <button className="bg-gray-200 rounded-full w-6 h-6 text-black" onClick={handleIncrement}>+</button>
                <span className="text-black">₹{details.price * quantity}</span>
                <button className="bg-gray-200 rounded-full w-6 h-6 text-black" onClick={handleDecrement}>-</button>
                <span className="text-black">{quantity}Kg.</span>
            </div>
        </div>
    );
}
