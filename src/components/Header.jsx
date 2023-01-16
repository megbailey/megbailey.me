import React from "react";
import { Box, Container, Typography } from "@mui/material";
import "../assets/style/header.css";

const Header = () => {

  return (
    <React.Fragment>
       <Container className="header-container outlined" maxWidth="sm">
        <Box className="header-box outlined">
          <h1>Hi, I'm Megan <span className="wave" role="img" aria-labelledby="wave">👋🏻</span></h1> 
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Header;