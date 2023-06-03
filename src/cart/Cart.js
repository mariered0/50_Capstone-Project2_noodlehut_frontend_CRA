import React, { useState, useContext } from "react";
import cartContext from "./CartContext";
import {
  Box,
  Drawer,
  CssBaseline,
  Typography,
  Button,
} from "@mui/material";



const Cart = () => {

  const [isCartOpen, setIsCartOpen] = useState(true);
  // const { cart, setCart, addToCart, removeFromCart } = useContext(cartContext);

  





  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Drawer
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: "30%",
          },
        }}
        variant="persistent"
        anchor="right"
        open={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      >
        
        {/* Close & Clear button section */}
        <Box display="flex" 
             justifyContent="right"
             m={2} >
          <Button variant="outlined"
                  size="small"
                  color="primary"
                  onClick={() => setIsCartOpen(false)}>
            Close
          </Button>
          <Button variant="outlined"
                  size="small"
                  color="primary"
                  // onClick={() => setIsCartOpen(false)}
          >
            Clear Cart
          </Button>
        </Box>
        
        <Box p={2} width="250px" textAlign="center" role="presentation">
          <Typography variant="h6" component="div">
            Cart
          </Typography>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Cart;
