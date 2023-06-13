import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../user/UserContext";
import CartContext from "../cart/CartContext";
import { AppBar, Toolbar, Button, Badge, IconButton, Stack } from "@mui/material";
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

      <AppBar component="nav"
              color="neutral"
              position="sticky"
      >
        <Toolbar disableGutters>
          <NavLink to="/">
          <Button size="large" color="primary">
            NoodleHut
          </Button>
          </NavLink>

          <Stack direction="row" spacing={1}>
        
          <NavLink to="/menu" >
          <Button color="info">Menu</Button>
          </NavLink>    

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
            <IconButton aria-label="profile" color="info" href="/user">
              <AccountCircleIcon/>
            </IconButton>
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

          </Stack>

        </Toolbar>
      </AppBar>

    </>
  );
}

export default NavBar;
