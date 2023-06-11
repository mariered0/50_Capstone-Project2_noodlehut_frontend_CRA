import React from "react";
import { render } from '@testing-library/react';
import ItemCard from "./ItemCard";
import CartContext from "../cart/CartContext";
const { isCartOpen, setIsCartOpen, cart, addToCart, removeFromCart } = require("../cart/_testCommon");


it("renders without crashing", () => {
    render(
        <CartContext.Provider value={{ isCartOpen, setIsCartOpen, cart, addToCart, removeFromCart }}>
            <ItemCard />
        </CartContext.Provider>
        
    );
});

it("matches snapshot", () => {
	const { asFragment } = render(
        <CartContext.Provider value={{ isCartOpen, setIsCartOpen, cart, addToCart, removeFromCart }}>
            <ItemCard />
        </CartContext.Provider>
    );
	expect(asFragment()).toMatchSnapshot();
});