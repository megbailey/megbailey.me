import React, { useState, useEffect } from "react";
import { Container, Grid } from "@mui/material";
import AboutMe from "../../../components/AboutMe";
import ProjectCard from "../../../components/ProjectCard";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";

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
            <Grid container justifyContent="center" spacing={2} columns={16}>
                <Grid xs={4}>
                    <ProjectCard />
                </Grid>
                <Grid xs={4}>
                    <ProjectCard />
                </Grid>
                <Grid xs={4}>
                    <ProjectCard />
                </Grid>
            </Grid>
            <Footer />
        </React.Fragment>
    )
}

export default Home;