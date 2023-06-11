import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../user/UserContext";
import CartContext from "../cart/CartContext";
// import "./NavBar.css";
import { AppBar, Toolbar, Typography, Button, CssBaseline, Box, Badge, IconButton, Link } from "@mui/material";
import { styled } from "@mui/material/styles"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RamenDiningIcon from '@mui/icons-material/RamenDining';

function NavBar() {
  const { currentUser, signout } = useContext(UserContext);
  const { cart, setIsCartOpen } = useContext(CartContext);
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      padding: '0 4px',
    },
  }));

  return (
    <>
      {/* <CssBaseline /> */}
      <AppBar component="nav"
              color="neutral"
      >
        <Toolbar>
          <NavLink to="/">
          <Button size="large" color="primary">
            NoodleHut
          </Button>
          </NavLink>

          <NavLink to="/">
          <Button color="info">Home</Button>
          </NavLink>
        
          <NavLink to="/menu" >
          <Button color="info">Menu</Button>
          </NavLink>

          



          {/*  This is only displayed when user has an account and logged in.
            Move this box to the right side in the navbar.
          */}      
          <Box display="flex" justifyContent="right">
            <Box>
          { currentUser ? "" :(<>
          <NavLink to="/signup">
          <Button color="info">Sign Up</Button>
          </NavLink>

          <NavLink to="/signin">
          <Button color="info">Sign In</Button>
          </NavLink>
          </>
          )}
          
          
          { currentUser ? (<>
          <NavLink to="/user">
            <Button color="info" startIcon={<AccountCircleIcon />}>{ currentUser.username}</Button>
          </NavLink>

          <NavLink to="/" onClick={signout}>
            <Button color="info">Sign Out</Button>
          </NavLink>
          </>)
           : ""}

          <NavLink>
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={ cartItemCount } color="secondary">
                <ShoppingCartIcon color="inherit" 
                                onClick={() => setIsCartOpen(true) }
                />
              </StyledBadge>
            </IconButton>
          </NavLink>
          </Box>

          </Box>

        </Toolbar>
      </AppBar>

    </>
  );
}

export default NavBar;
