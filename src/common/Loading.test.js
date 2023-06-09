import React from "react";
import { render } from '@testing-library/react';
import Loading from "./Loading";

it("renders without crashing", () => {
    render(
            <Loading />
    );
});

it("matches snapshot", () => {
	const { asFragment } = render(
        <Loading />    
    );
	expect(asFragment()).toMatchSnapshot();
});