import React from "react";
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import userContext from "../user/UserContext";
import Home from "./Home";

const currentUser = { username: 'test', 
                      firstName: 'Test', 
                      lastName: 'Test', 
                      phone: '0000000000', 
                      email: 'test@gmail.com', 
                      favorites: [], 
                      isAdmin: false };


it("renders without crashing", () => {
    render( 
            <MemoryRouter>
                <userContext.Provider value={{ currentUser }}>
                    <Home />
                </userContext.Provider>
            </MemoryRouter>
    );
});

it("matches snapshot", () => {
	const { asFragment } = render(
            <MemoryRouter>
                <userContext.Provider value={{ currentUser }}>
                    <Home />
                </userContext.Provider> 
            </MemoryRouter>
    );
	expect(asFragment()).toMatchSnapshot();
});