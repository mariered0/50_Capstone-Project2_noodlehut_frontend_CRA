import React from "react";
import { Container, Box, CircularProgress } from "@mui/material";

const Loading = () => {
  return (
    <div>
      <Container
        sx={{
          height: 500,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <CircularProgress />
        </Box>
      </Container>
    </div>
  );
};

export default Loading;
