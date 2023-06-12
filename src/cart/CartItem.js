import React, { useState, useContext, useEffect } from "react";
import cartContext from "./CartContext";
import { Box, Grid, Avatar, Typography, Divider, IconButton, Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import img from "../static/image/image_unavailable.png";

const CartItem = ({ id, name, qty, price }) => {
  const { deleteItem, addToCart, removeFromCart } =
    useContext(cartContext);

  return (
    <Box key={id} sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item xs={3} >
          <Avatar
            src={img}
            sx={{ mr: 2,
                  width: { xs: 0,
                           sm: 0,
                           md: 80,
                           lg: 80,
                           xl: 80},
                  height: { xs: 0,
                            sm: 0,
                            md: 80,
                            lg: 80,
                            xl: 80}
                  }}
          />
        </Grid>
        <Grid item xs={7}>
          <Typography variant="h6" align="left"> {name}</Typography>
          <Box display="flex" justifyContent={"space-between"}>
            <Typography variant="body1">
              {qty} total
            </Typography>
            <Typography variant="body1">
              ${price}
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={1}>
          <Stack>
            <IconButton aria-label="add one" onClick={() => addToCart({id, name, price})}>
              <AddCircleOutlineIcon />
            </IconButton>
            <IconButton
              aria-label="delete one"
              onClick={() => removeFromCart(id)}
            >
              <RemoveCircleOutlineIcon />
            </IconButton>
          </Stack>
        </Grid>
        <Grid item xs={1} >
          <Box sx={{ height: 80 }} display="flex" alignItems="center"> 
          <IconButton aria-label="delete" onClick={() => deleteItem(id)}>
            <CloseIcon />
          </IconButton>
          </Box>

        </Grid>
      </Grid>
      <Divider variant="inset" />
    </Box>
  );
};

export default CartItem;
