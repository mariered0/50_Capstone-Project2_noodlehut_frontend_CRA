import React from "react";
import { render } from '@testing-library/react';
import Profile from "./Profile";
import UserContext from "../user/UserContext";
const { currentUser, setCurrentUser } = require("../cart/_testCommon");


it("renders without crashing", () => {
    render(
        <UserContext.Provider value={{ currentUser, setCurrentUser }}>
            <Profile />
        </UserContext.Provider>
        
    );
});

it("matches snapshot", () => {
	const { asFragment } = render(
        <UserContext.Provider value={{ currentUser, setCurrentUser }}>
            <Profile />
        </UserContext.Provider>
    );
	expect(asFragment()).toMatchSnapshot();
});