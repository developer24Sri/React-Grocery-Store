import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/data";
import { useDispatch } from "react-redux";
import { addToCart } from "../stores/Cart";

export default function Details() {
  const { slug } = useParams();
  const [Details, setDetails] = useState({});
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const product = products.find((product) => product.slug === slug);
    if (product) {
      setDetails(product);
    } else {
      window.location.href = "/";
    }
  }, [slug]);

  function handleDecrement() {
    setQuantity((prevQuantity) => (prevQuantity - 1 < 1 ? 1 : prevQuantity - 1));
  }

  function handleIncrement() {
    setQuantity((prevQuantity) => prevQuantity + 1);
  }

  function handleAddToCart() {
    dispatch(
      addToCart({
        productId: Details.id,
        quantity: quantity,
      })
    );
  }

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl text-center my-8">PRODUCT DETAILS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center">
          <img src={Details.image} alt={Details.name} className="w-full" />
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl uppercase font-bold">{Details.name}</h1>
          <p className="font-bold text-3xl">${Details.price}</p>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <button
                className="bg-gray-100 h-10 w-10 font-bold text-xl rounded-xl flex justify-center items-center"
                onClick={handleDecrement}
              >
                -
              </button>
              <span className="bg-gray-100 h-10 w-10 font-bold text-xl rounded-xl flex justify-center items-center">
                {quantity}
              </span>
              <button
                className="bg-gray-100 h-10 w-10 font-bold text-xl rounded-xl flex justify-center items-center"
                onClick={handleIncrement}
              >
                +
              </button>
            </div>
            <button
              className="bg-slate-900 text-white px-7 py-3 rounded-xl shadow-2xl"
              onClick={handleAddToCart}
            >
              Add to cart
            </button>
          </div>
          <p>{Details.description}</p>
        </div>
      </div>
    </div>
  );
}


/* 
How ifcondition works:
   Since filter returns an array, even if it contains only one element, you need to access the first element of this array using findDetails[0].
javascript
Copy code
if (findDetails.length > 0) {
    setDetails(findDetails[0]);
} else {
    window.location.href = "/";
}
findDetails.length > 0: Checks if any product was found.
findDetails[0]: Accesses the first (and only) product in the array to update the Details state. 
*/