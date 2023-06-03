import React, { useContext } from "react";
import cartContext from "../cart//CartContext";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Typography,
} from "@mui/material";

import defaultImg from "../image/image_unavailable.png";


const ItemCard = ({ id, name, desc, price }) => {
  const { cart, setCart, addToCart, removeFromCart } = useContext(cartContext);

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
              <Button size="small"
                      onClick={() => addToCart(id)}
              >
                Add
              </Button>
            </CardActions>
          </Card>
        </Grid>
     
  );
};

export default ItemCard;
