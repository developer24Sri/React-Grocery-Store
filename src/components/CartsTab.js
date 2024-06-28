import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItems from "./CartItems";
import { toggleStatusTab } from "../stores/Cart";
import { products } from "../data/data";

export default function CartsTab() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const carts = useSelector((store) => store.cart.items);
    const TabStatus = useSelector((store) => store.cart.TabStatus);
    const dispatch = useDispatch();
    const [cartDetails, setCartDetails] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const details = carts.map((cartItem) => {
            const product = products.find((product) => product.id === cartItem.productId);
            return { ...cartItem, ...product };
        });
        setCartDetails(details);

        const totalPrice = details.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        setTotal(totalPrice);
    }, [carts]);

    function handleCloseTab() {
        dispatch(toggleStatusTab());
    }

    function handleCheckout() {
        setIsPopupOpen(true);
    }

    function handleClosePopup() {
        setIsPopupOpen(false);
    }

    return (
        <div className={`fixed top-0 right-0 bg-white shadow-2xl w-96 h-full grid grid-rows-[60px_1fr_60px] transform transition-transform duration-500 ${TabStatus === false ? "translate-x-full" : ""}`}>
            <h2 className="p-5 text-black text-2xl">Shopping Cart</h2>
            <div className="p-5 overflow-y-auto">
                {cartDetails.map((item, key) => (
                    <CartItems data={item} key={key} />
                ))}
                <div className="text-xl font-bold mt-4 ">Total: ₹{total}</div>
            </div>
            <div className="grid grid-cols-2">
                <button className="bg-black text-white" onClick={handleCloseTab}>CLOSE</button>
                <button className="bg-green-500 text-black" onClick={handleCheckout}>CHECKOUT</button>
            </div>

            {isPopupOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-5 rounded-lg shadow-lg w-11/12 max-w-md">
                        <h3 className="text-2xl font-bold mb-4">Order Summary</h3>
                        <ul className="mb-4">
                            {cartDetails.map((item, index) => (
                                <li key={index} className="border-b py-2">
                                    {item.name} - ₹{item.price} x {item.quantity} = ₹{item.price * item.quantity}
                                </li>
                            ))}
                        </ul>
                        <div className="text-xl font-bold mb-4 text-center">Total: ₹{total}</div>
                        <p className="text-green-500 font-bold">Your products will be delivered soon!</p>
                        <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded" onClick={handleClosePopup}>CLOSE</button>
                    </div>
                </div>
            )}
        </div>
    );
}
