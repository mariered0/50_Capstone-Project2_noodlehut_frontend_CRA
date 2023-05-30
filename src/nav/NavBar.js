import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import UserContext from "../user/UserContext";
import "./NavBar.css";
import { AppBar, Toolbar, Typography, Button, CssBaseline, Box } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

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

          {/*  This is only displayed when user has an account and logged in.
            Move this box to the right side in the navbar.
          */}

          <Box justifyContent="flex-">
          <NavLink to="/signup">
          <Button color="inherit">Sign Up</Button>
          </NavLink>

          <NavLink to="/signin">
          <Button color="inherit">Sign In</Button>
          </NavLink>
          
          { currentUser ? (<>
          <NavLink to="/user">
            <Button color="inherit" startIcon={<AccountCircleIcon />}>{ currentUser.username}</Button>
          </NavLink>

          <NavLink to="/" onClick={signout}>
            <Button color="inherit">Sign Out</Button>
          </NavLink>
          </>)
           : ""}

          </Box>

        </Toolbar>
      </AppBar>

    </>
  );
}

export default NavBar;
