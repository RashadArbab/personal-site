import { Card, Grid, Button, useTheme, useMediaQuery, Paper, Typography } from '@material-ui/core';
import Anime, { anime } from 'react-anime';
import Navbar from './navbar';
import TitlePng from '../Static/Rashad_Arbab.png';
import MyPhoto from '../Static/PhotoOfMe.jpg';
import AboutPaper from './about-paper';
import ProjectsContent from './projectsContent';
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const Projects = () => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"))
    const xsScreen = useMediaQuery(theme.breakpoints.down("xs"))
    const lgScreen = useMediaQuery(theme.breakpoints.up("lg"))

    const [goProjects, setGoProjects] = useState(false);

    const textPadding = xsScreen ? "8px" : "20px"
    const cardWidth = xsScreen ? "85vw" : "60vw"
    return (
        <div>

            <Anime
                opacity={[0, 1]}
                easing={"easeInOutSine"}
                duration={1000}
            >
                <Navbar type={"projects"} />

            </Anime>
            <Grid container justify="center">
                <ProjectsContent />
            </Grid>

        </div >
    )
}

export default Projects;