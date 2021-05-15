import React, { useState } from 'react'
import { Card, Grid, Button, useTheme, useMediaQuery } from '@material-ui/core';
import Anime, { anime } from 'react-anime';
import Navbar from './navbar';
import { Redirect } from 'react-router-dom';
import TitlePng from '../Static/Rashad_Arbab.png';
import AboutPaper from './about-paper';

const Home = () => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"))
    const xsScreen = useMediaQuery(theme.breakpoints.down("xs"))
    const lgScreen = useMediaQuery(theme.breakpoints.up("lg"))
    const [goAbout, setGoAbout] = useState(false);

    const getWidth = () => {
        if (xsScreen) {
            return (300)
        } else if (lgScreen) {
            return (800)
        } else {
            return (600)
        }
    }


    const redirectFunction = () => {
        return (
            <Redirect to={"/about"} />
        )
    }

    return (
        <div>
            <Grid direction={"column"} alignItems="center" spacing={theme.spacing(10,2)}>
                <Anime
                    initial
                    opacity={[0, 1]}
                    easing={"easeInOutSine"}
                    duration={1000}
                >
                    <Navbar type={'home'} />
                </Anime>
                <div style={{ marginTop: '50px' }}>
                    <Anime
                        opacity={[0, 1]}
                        easing={"easeInOutSine"}
                        duration={2000}
                        translateY={"20vh"}
                    >
                        <Grid container direction={"column"} justify={'center'} alignItems="center">
                            <img src={TitlePng} width={getWidth()} />
                        </Grid>
                    </Anime>
                    <Anime
                        opacity={[0, 1]}
                        easing={"linear"}
                        delay={2000}
                        duration={500}
                    >
                        <Grid container justify="center">
                            <Button style={{ marginTop: "250px", color: "white", paddingTop: "15px", paddingBottom: "15px", paddingInline: "25px", backgroundColor: "rgba(255,255,255,0.1)" }} onClick={() => setGoAbout(true)}>Get Started</Button>
                        </Grid>
                    </Anime>
                </div>
            </Grid>
            {goAbout ? redirectFunction() : ""}
        </div>
    )
}

export default Home;