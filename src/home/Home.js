import { Box, Container, Typography } from "@mui/material";
import React from "react";


function Home() {
  
  return (
    <main>
      <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>NoodleHut
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Thai home-style coocking. We serve authentically traditional Thai dishes. No dine-in. This is a take-out restaurant.
        </Typography>

      </Container>
      </Box>

    </main>
  );
}

export default Home;
