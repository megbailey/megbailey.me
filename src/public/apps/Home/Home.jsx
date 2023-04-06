import React, { useState, useEffect } from "react";
import { Container, Grid, Typography } from "@mui/material";
import AboutMe from "../../../components/about-me/AboutMe";
import ProjectCard from "../../../components/project/ProjectCard";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";

function Home () {
    return (
        <React.Fragment>
            <section>
                <Container className="home-section">
                    <Container className="home-content">
                    <Header />
                    </Container>
                </Container>
            </section>
            <AboutMe />
            <Typography gutterBottom variant="h2" component="div">
                Check out some of my work!
            </Typography>
            <Grid container className="project-spotlight outlined" justifyContent="center" spacing={1} columns={16}>
                <Grid item xs={4}>
                    <ProjectCard />
                </Grid>
                <Grid item xs={4}>
                    <ProjectCard />
                </Grid>
                <Grid item xs={4}>
                    <ProjectCard />
                </Grid>
            </Grid>
            <Footer />
        </React.Fragment>
    )
}

export default Home;