import React, { useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "../user/UserContext";
import { Box, Container, Typography, Button, Grid, Stack } from "@mui/material";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import HomeIcon from "@mui/icons-material/Home";
import ComputerIcon from "@mui/icons-material/Computer";
import heroImg from "../static/image/hero.jpg";

function Home() {
  const { currentUser } = useContext(userContext);

  return (
    
      <Container sx={{ pt: 6, pb: 6 }}>
        {currentUser ? (
          <Typography
            component="h3"
            variant="h3"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Welcome back, {currentUser?.firstName}!
          </Typography>
        ) : (
          ""
        )}

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            sx={{
              height: 500,
              wedth: 650,
              maxHeight: { xs: 230, md: 500 },
              maxWidth: { xs: 350, md: 700 },
            }}
            alt="food image"
            src={heroImg}
          />
        </Box>

        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
          sx={{ pt: 3 }}
          className="title"
        >
          NoodleHut
        </Typography>

        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
        >
          Thai home-style coocking. We serve authentically traditional Thai
          dishes.
          <br />
          No dine-in. This is a take-out restaurant.
        </Typography>

        {currentUser ? (
          ""
        ) : (
          <Link to="/menu">
            <Box textAlign="center">
              <Button variant="contained" startIcon={<RestaurantIcon />}>
                Care to order?
              </Button>
            </Box>
          </Link>
        )}

      <Box
        sx={{
          width: "100%",
          // display: "flex",
          // justifyContent: "space-around",
          mt: 4,
        }}
        component="footer"
        
      >
        <Grid
          container
          spacing={{ xs: 3, md: 5 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item sm={12} md={4} key={1} display="flex" justifyContent={"center"}>
              <Box>
              <Typography
                variant="h5"
                component="div"
                align="center"
                color="primary"
              >
                Visit
              </Typography>

              <Stack direction="row" alignItems="center" gap={1}>
                <HomeIcon fontSize="large" color="primary" />
                <Typography variant="body2">8418 NoodleHut, Good, WA, United States</Typography>
              </Stack>
              </Box>
          </Grid>
          <Grid item sm={12} md={4} display="flex" justifyContent={"center"}>
            <Box>
              <Typography variant="h5" align="center" color="primary">
                Hours
              </Typography>
              <Typography variant="body1">Tue - Fri:</Typography>
              <Typography variant="body2">11:00 AM - 3:00 PM & 4:30 PM - 8:30 PM</Typography>
              <Typography variant="body1">Sat:</Typography>
              <Typography variant="body2">12:00 PM - 3:00 PM & 4:30 PM - 8:30 PM</Typography>
              <Typography variant="body1">Mon & Sun</Typography>
              <Typography variant="body2">Closed</Typography>
            </Box>
          </Grid>

          <Grid item sm={12} md={4} display="flex" justifyContent={"center"}>
            <Box>
                <Typography variant="h5" component="div" align="center" color="primary">
                  Contact
                </Typography>
                <Stack
                  direction="row"
                  alignItems="center"
                  gap={1}
                  align="center"
                >
                  <ComputerIcon fontSize="large" color="primary" />
                  <Typography variant="body2">Developped by</Typography>
                  <Link to="https://github.com/mariered0">Marie H.</Link>
                </Stack>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Home;
