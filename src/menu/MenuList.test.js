import React from "react";
import { render } from '@testing-library/react';
import MenuList from "./MenuList";

it("renders without crashing", () => {
    render(
        <MenuList />
    );
});

it("matches snapshot", () => {
	const { asFragment } = render(
        <MenuList />
    );
	expect(asFragment()).toMatchSnapshot();
});