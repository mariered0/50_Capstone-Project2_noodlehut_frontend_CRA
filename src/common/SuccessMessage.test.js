import React from "react";
import { render } from '@testing-library/react';
import SuccessMessage from "./Loading";

it("renders without crashing", () => {
    render(
            <SuccessMessage content={'success'} />
    );
});

it("matches snapshot", () => {
	const { asFragment } = render(
        <SuccessMessage content={'success'} />    
    );
	expect(asFragment()).toMatchSnapshot();
});