import React, { useContext } from "react";
import cartContext from "../cart//CartContext";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  IconButton,
  Button,
  Typography,
  Box
} from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

import defaultImg from "../image/image_unavailable.png";


const ItemCard = ({ id, name, desc, price }) => {
  const { isCartOpen, setIsCartOpen, cart, setCart, addToCart, removeFromCart, getTotalCost } = useContext(cartContext);

  
  function add({id, name, price}){
    addToCart({id, name, price})
    if (!isCartOpen) setIsCartOpen(true);
  };



  return (
    
        <Grid item key={id} xs={12} sm={6} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardMedia
              component="img"
              image={ defaultImg }
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                {name}
              </Typography>
              <Typography>{desc}</Typography>
              <Typography>{price}</Typography>
            </CardContent>
            <CardActions>
              { !cart.some(item => item.id === id)
              ?
                <Button
                        onClick={() => add({id, name, price})}
                >
                  Add
                </Button>
              : 
                <Box>
                  <IconButton
                          onClick={() => addToCart({id, name, price})}
                  >
                    <AddCircleIcon />
                  </IconButton>
                  <IconButton size="small"
                        onClick={() => removeFromCart(id)}
                  >
                    <RemoveCircleIcon />
                  </IconButton>
                </Box>

              }
            </CardActions>
          </Card>
        </Grid>
     
  );
};

export default ItemCard;
