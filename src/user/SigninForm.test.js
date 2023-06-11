import React from "react";
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SigninForm from "./SigninForm";
import UserContext from "../user/UserContext";

const signin = jest.fn();


it("renders without crashing", () => {
    render(
        <MemoryRouter>
            <UserContext.Provider value={{ signin }}>
                <SigninForm />
            </UserContext.Provider>
        </MemoryRouter>
        
    );
});

it("matches snapshot", () => {
	const { asFragment } = render(
        <MemoryRouter>
            <UserContext.Provider value={{ signin }}>
                <SigninForm />
            </UserContext.Provider>
        </MemoryRouter>
    );
	expect(asFragment()).toMatchSnapshot();
});