import React, { useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "../user/UserContext";
import { Box, Container, Typography, Button } from "@mui/material";
import RestaurantIcon from '@mui/icons-material/Restaurant';
import SuccessMessage from "../common/SuccessMessage";
import heroImg from "../image/hero.jpg";


function Home() {
  const { currentUser } = useContext(userContext);
  
  return (

      // <Box
      //     sx={{
      //       width: 1,
      //       height: '100vh',
      //       backgroundColor: "#333533",
      //       display: 'flex',
      //       justifyContent: 'center',
      //       pt: 8,
      //       pb: 6,           
      //     }}
      //   >
      <Container>
        { currentUser ? 
        <Typography component="h2" variant="h2" align="center" color="textPrimary" gutterBottom>Welcome back, {currentUser.firstName}!</Typography>
        // <SuccessMessage content={`Welcome back, ${currentUser.firstName}!`}/>
        : ""}

        

        <Box component="img"
             sx={{ height: 500,
                   wedth: 650,
                  //  maxHeight: { xs: 230, md: 500 },
                  //  maxWidth: { xs: 350, md: 650 }
                   }}
             alt="food image"
             src={heroImg}
        >
        </Box>
        

        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>NoodleHut
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Thai home-style coocking. We serve authentically traditional Thai dishes. No dine-in. This is a take-out restaurant.
        </Typography>

        { currentUser ? "" : <Link to="/menu"><Box textAlign="center"><Button variant="contained" startIcon={<RestaurantIcon />}>
            Care to order?
          </Button></Box></Link>}

      </Container>
      // </Box>

  );
}

export default Home;
