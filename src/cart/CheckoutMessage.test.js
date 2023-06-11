import React from "react";
import { render } from '@testing-library/react';
import CheckoutMessage from "./CheckoutMessage";

const isDialogOpen = true
const setIsDialogOpen = jest.fn();

it("renders without crashing", () => {
    render(
            <CheckoutMessage isDialogOpen={isDialogOpen} setIsDialogOpen={setIsDialogOpen}/>
    );
});

it("matches snapshot", () => {
	const { asFragment } = render(
            <CheckoutMessage />
    );
	expect(asFragment()).toMatchSnapshot();
});
