import { Avatar, Container, Grid } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import React, { Component } from "react";
import "./footer.css"

const Footer = () => {
    return (
        <Container className="footer-container outlined">
            <Grid container justifyContent="center" spacing={2} columns={2}>
                <Grid item xs="auto">
                    <Avatar><GitHubIcon /></Avatar>
                </Grid>
                <Grid item xs={2} >
                    MB © 2023
                    {/* 
                        todo: 
                        - make this link to my license
                        - fix grid issues I want avatars and copyright to be inline
                    */}
                </Grid>
            </Grid>
        </Container>
    )
}

export default Footer;