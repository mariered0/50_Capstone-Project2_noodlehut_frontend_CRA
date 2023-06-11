import React, { useContext, useState } from "react";
import cartContext from "./CartContext";
import CartItem from "./CartItem";
import CheckoutMessage from "./CheckoutMessage";
import { Box, Drawer, CssBaseline, Typography, Button, Divider } from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

const Cart = () => {
  
  const { cart, getTotalCost, isCartOpen, setIsCartOpen, deleteAllFromCart } =
    useContext(cartContext);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

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
        <Box display="flex" justifyContent="right" m={2}>
          <Button
            variant="outlined"
            size="small"
            color="primary"
            onClick={() => setIsCartOpen(false)}
          >
            Close
          </Button>
          <Button
            variant="outlined"
            size="small"
            color="primary"
            onClick={() => deleteAllFromCart()}
          >
            Clear Cart
          </Button>
        </Box>

        <Box p={2} width="100%" textAlign="center" role="presentation">
          <Typography variant="h3" component="div">
            Your Cart
          </Typography>
          {cart?.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              name={item.name}
              qty={item.quantity}
              price={item.price}
            />
          ))}
        </Box>

        <Box m={2}>
          <Divider variant="fullWidth" />
          <Typography variant="h3" align="right">
            Total: ${getTotalCost()}
          </Typography>
          <Box justifyContent="right" display="flex" m={1}>
              <Button
                variant="contained"
                size="large"
                startIcon={<ShoppingCartCheckoutIcon />}
                onClick={() => {setIsDialogOpen(true)}}
              >
                Go to Checkout
              </Button>
          </Box>
        </Box>
      </Drawer>

      {isDialogOpen ? <CheckoutMessage isDialogOpen={isDialogOpen} setIsDialogOpen={setIsDialogOpen} /> : ""}
    </Box>
  );
};

export default Cart;
