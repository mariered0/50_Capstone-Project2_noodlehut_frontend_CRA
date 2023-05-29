import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import UserContext from "../user/UserContext";
import "./NavBar.css";
import { AppBar, Toolbar, Typography, Button, CssBaseline } from "@mui/material";

function NavBar() {
  const { currentUser, signout } = useContext(UserContext);

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <NavLink to="/">
          <Typography variant="h6">
            NoodleHut
          </Typography>
          </NavLink>

          <NavLink to="/">
          <Button color="inherit">Home</Button>
          </NavLink>
        
          <NavLink to="/menu">
          <Button color="inherit">Menu</Button>
          </NavLink>

          <NavLink to="/signup">
          <Button color="inherit">Sign Up</Button>
          </NavLink>

          <NavLink to="/signin">
          <Button color="inherit">Sign In</Button>
          </NavLink>


          <NavLink to="/user">
          <Button color="inherit">Profile</Button>
          </NavLink>

          <NavLink to="/" onClick={signout}>
            <Button color="inherit">Sign Out</Button>
          </NavLink>
        </Toolbar>
      </AppBar>

    </>
  );
}

export default NavBar;
