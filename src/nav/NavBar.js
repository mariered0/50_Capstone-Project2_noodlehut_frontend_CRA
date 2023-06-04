import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import UserContext from "../user/UserContext";
import CartContext from "../cart/CartContext";
import "./NavBar.css";
import { AppBar, Toolbar, Typography, Button, CssBaseline, Box, Badge, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

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
      <CssBaseline />
      <AppBar component="nav">
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
          <Box display="flex" justifyContent="right">
            <Box>
          { currentUser ? "" :(<>
          <NavLink to="/signup">
          <Button color="inherit">Sign Up</Button>
          </NavLink>

          <NavLink to="/signin">
          <Button color="inherit">Sign In</Button>
          </NavLink>
          </>
          )}
          
          
          { currentUser ? (<>
          <NavLink to="/user">
            <Button color="inherit" startIcon={<AccountCircleIcon />}>{ currentUser.username}</Button>
          </NavLink>

          <NavLink to="/" onClick={signout}>
            <Button color="inherit">Sign Out</Button>
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
