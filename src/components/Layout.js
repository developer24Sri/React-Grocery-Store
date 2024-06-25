import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import CartsTab from "./CartsTab";

export default function Layout(){
    return(
        <div className="bg-lime-200">
          <main className="w-[1200px] max-w-full m-auto p-5">
            <Header />
            <Outlet />
          </main>
          <CartsTab />
        </div>
    )
}