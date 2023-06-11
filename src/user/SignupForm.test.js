import React from "react";
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SignupForm from "./SignupForm";
import UserContext from "../user/UserContext";

const signup = jest.fn();


it("renders without crashing", () => {
    render(
        <MemoryRouter>
            <UserContext.Provider value={{ signup }}>
                <SignupForm />
            </UserContext.Provider>
        </MemoryRouter>
        
    );
});

it("matches snapshot", () => {
	const { asFragment } = render(
        <MemoryRouter>
            <UserContext.Provider value={{ signup }}>
                <SignupForm />
            </UserContext.Provider>
        </MemoryRouter>
    );
	expect(asFragment()).toMatchSnapshot();
});