import React from "react";
import CartCalculation from "../components/Cart_page/CartCalculation";
import CartProducts from "../components/Cart_page/CartProducts";
import HelmetTitle from "../components/HelmetTitle/HelmetTitle";

const Cart = () => {
    return (
        <div className="max-w-screen-xl mx-auto my-7">
            <HelmetTitle>My Cart</HelmetTitle>
            <div className=" grid md:grid-cols-2 bg-slate-50">
                <CartProducts />
                <CartCalculation />
            </div>
        </div>
    );
};

export default Cart;