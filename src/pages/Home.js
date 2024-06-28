import React from "react";
import { products } from "../data/data";
import ProductCart from "../components/ProductCart";
import Carousel from "../components/ImgCarousel";
import bannerimg1 from "../assets/images/bannerimg1.png";
import bannerimg2 from "../assets/images/bannerimg2.png";
import bannerimg3 from "../assets/images/bannerimg3.png";
import bannerimg4 from "../assets/images/bannerimg4.png";
export default function Home(){
    let slides = [bannerimg1,bannerimg2,bannerimg3,bannerimg4 ]
    return(
        <div>
            <h1 className="text-4xl font-medium italic my-5 flex justify-center">THE HAPPY-CART.COM</h1>
            <div className="w-[100%] m-auto pt-11 mb-12">
            <Carousel slides={slides} />
            </div>
             <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
            {products.map((product,key)=>
            
                <ProductCart key={key} data={product} />
            
            )}
            </div>
        </div>
    )
}