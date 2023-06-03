import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import NavBar from "./nav/NavBar";
import MenuList from "./menu/MenuList";
import Signup from "./user/SignupForm";
import Signin from "./user/SigninForm";
import Profile from "./user/Profile";
import Cart from "./cart/Cart";

function AppRoutes() {
    return (
        <BrowserRouter>
            <NavBar />

            <Routes>
            <Route path="/" element={<Home />} />



            <Route path="/menu" element={<MenuList />} />



            <Route path="/signup" element={<Signup />} />

            <Route path="/signin" element={<Signin />}  />
            <Route path="/user" element={<Profile />}  />

            </Routes>

        </BrowserRouter>
    )
};

export default AppRoutes;