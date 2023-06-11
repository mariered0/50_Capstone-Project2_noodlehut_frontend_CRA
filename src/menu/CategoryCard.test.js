import React from "react";
import { render } from '@testing-library/react';
import CategoryCard from "./CategoryCard";

it("renders without crashing", () => {
    render(
        <CategoryCard />
    );
});

it("matches snapshot", () => {
	const { asFragment } = render(
        <CategoryCard />
    );
	expect(asFragment()).toMatchSnapshot();
});