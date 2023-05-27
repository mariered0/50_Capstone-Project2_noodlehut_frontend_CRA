import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { AppBar, Toolbar, Typography, Button, CssBaseline } from "@mui/material";

function NavBar() {

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
          <NavLink to="/user">
          <Button color="inherit">Profile</Button>
          </NavLink>
        </Toolbar>
      </AppBar>

    </>
  );
}

export default NavBar;
