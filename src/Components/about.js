import { Card, Grid, Button, useTheme, useMediaQuery, Paper, Typography } from '@material-ui/core';
import Anime, { anime } from 'react-anime';
import Navbar from './navbar';
import TitlePng from '../Static/Rashad_Arbab.png';
import MyPhoto from '../Static/PhotoOfMe.jpg';
import AboutPaper from './about-paper';

import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const About = () => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"))
    const xsScreen = useMediaQuery(theme.breakpoints.down("xs"))
    const lgScreen = useMediaQuery(theme.breakpoints.up("lg"))

    const [goProjects, setGoProjects] = useState(false);

    const textPadding = xsScreen ? "8px" : "20px"
    const cardWidth = xsScreen ? "90vw" : "60vw"

    const renderButton = () => {
        return (
            <Anime
                opacity={[0, 1]}
                easing={"linear"}
                delay={2000}
                duration={500}
            >

                <Grid container justify="center" alignItems="center">
                    <Button style={{ marginTop: "200px", marginBottom: "200px", color: "white", paddingTop: "15px", paddingBottom: "15px", paddingInline: "25px", backgroundColor: "rgba(255,255,255,0.1)" }} onClick={() => setGoProjects(true)}>View Projects</Button>
                </Grid>
            </Anime>
        )
    }

    return (
        <div>

            <Anime
                opacity={[0, 1]}
                easing={"easeInOutSine"}
                duration={1000}
            >
                <Navbar type={"about"} />
            </Anime>
            <div style={{
                padding: theme.spacing(0, 2),
                justifyContent: "center"
            }}>
                <Anime
                    initial
                    translateY={xsScreen ? "5vh" : "15vh"}
                    opacity={[0, 1]}
                    easing={"easeInOutSine"}
                    duration={2000}
                >
                    <AboutPaper />
                </Anime>
                {xsScreen ? "" : renderButton()}
            </div>

            { goProjects ? <Redirect to={"/projects"} /> : ""}

        </div >
    )
}

export default About;