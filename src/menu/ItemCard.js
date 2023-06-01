import React from "react";
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
              <Button size="small">
                Add
              </Button>
            </CardActions>
          </Card>
        </Grid>
     
  );
};

export default ItemCard;
