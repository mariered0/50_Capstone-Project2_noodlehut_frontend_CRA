import React from "react";
import { render } from '@testing-library/react';
import CartContext from "./CartContext";
import CartItem from "./CartItem";
const { deleteItem, addToCart, removeFromCart } = require("./_testCommon");

it("renders without crashing", () => {
    render(
        <CartContext.Provider value={{ deleteItem, addToCart, removeFromCart }}>
            <CartItem />
        </CartContext.Provider>
    );
});

it("matches snapshot", () => {
	const { asFragment } = render(
        <CartContext.Provider value={{ deleteItem, addToCart, removeFromCart }}>
            <CartItem />
        </CartContext.Provider>
    
    );
	expect(asFragment()).toMatchSnapshot();
});

