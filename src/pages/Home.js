import React from "react";
import { products } from "../data/data";
import ProductCart from "../components/ProductCart";
export default function Home(){
    return(
        <div>
            <h1 className="text-4xl font-medium italic my-5 flex justify-center">THE HAPPY-CART.COM</h1>
             <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
            {products.map((product,key)=>
            
                <ProductCart key={key} data={product} />
            
            )}
            </div>
        </div>
    )
}