import React, { useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "../user/UserContext";
// import Cart from "../menu/Cart.js";
import { Box, Container, Typography, Button } from "@mui/material";
import RestaurantIcon from '@mui/icons-material/Restaurant';


function Home() {
  const { currentUser } = useContext(userContext);
  
  return (
    <main>

      {/* <Cart /> */}

      <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
      <Container maxWidth="sm">
        { currentUser ? <Typography component="h2" variant="h2" align="center" color="textPrimary" gutterBottom>Welcome back, {currentUser.firstName}!</Typography>
        : ""}

        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>NoodleHut
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Thai home-style coocking. We serve authentically traditional Thai dishes. No dine-in. This is a take-out restaurant.
        </Typography>

        { currentUser ? "" : <Link to="/menu"><Box textAlign="center"><Button variant="contained" startIcon={<RestaurantIcon />}>
            Care to order?
          </Button></Box></Link>}

      </Container>
      </Box>

    </main>
  );
}

export default Home;
