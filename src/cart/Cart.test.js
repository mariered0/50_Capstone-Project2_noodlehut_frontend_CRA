import React from "react";
import { render } from '@testing-library/react';
import cartContext from "./cart/CartContext";
import Cart from "./Cart";
import { cart, getTotalCost, isCartOpen, setIsCartOpen, deleteAllFromCart } from "./testCommon"


it("renders without crashing", () => {
    render(<Cart />);
});

it("matches snapshot", () => {
	const { asFragment } = render(
        <CartContext.Provider value={{ cart, getTotalCost, isCartOpen, setIsCartOpen, deleteAllFromCart }}>
            <Cart />
        </CartContext.Provider>
    
    );
	expect(asFragment()).toMatchSnapshot();
});

