import React from "react";
import { render } from '@testing-library/react';
import ErrorMessage from "./ErrorMessage";

it("renders without crashing", () => {
    render(
            <ErrorMessage error={['error']} />
    );
});

it("matches snapshot", () => {
	const { asFragment } = render(
        <ErrorMessage error={['error']} />    
    );
	expect(asFragment()).toMatchSnapshot();
});