import React from "react";
import { render } from '@testing-library/react';
import CartContext from "./CartContext";
import Cart from "./Cart";
const { getTotalCost, isCartOpen, setIsCartOpen, deleteAllFromCart } = require("./_testCommon");
const cart = require("./_testCommon");


it("renders without crashing", () => {
    render(<Cart />);
});

it("matches snapshot", () => {
	const { asFragment } = render(
        <CartContext.Provider value={{ getTotalCost, cart, isCartOpen, setIsCartOpen, deleteAllFromCart }}>
            <Cart />
        </CartContext.Provider>
    
    );
	expect(asFragment()).toMatchSnapshot();
});

