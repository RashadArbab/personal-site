import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';

import MyPhoto from '../Static/PhotoOfMe.jpg';

import { useTheme, useMediaQuery } from '@material-ui/core';

import { Redirect } from 'react-router-dom';




export default function ComplexGrid() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"))
    const xsScreen = useMediaQuery(theme.breakpoints.down("xs"))
    const lgScreen = useMediaQuery(theme.breakpoints.up("lg"))

    const [goProjects, setGoProjects] = useState(false);

    const textPadding = xsScreen ? "8px" : "20px"
    const cardWidth = xsScreen ? "90vw" : "60vw"
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        paper: {
            backgroundColor: "rgba(255,255,255,0.05)", minHeight: '20vh', width: cardWidth, borderRadius: "8px",
            marginBottom: "50px"
        },
        image: {
            width: 128,
            height: 128,
        },
        img: {
            borderRadius: '8px',
            margin: "25px"
        },
        imgMobile: {
            width: '100%',
            borderTopLeftRadius: '8px',
            borderTopRightRadius: '8px'
        },
    }));

    const classes = useStyles();

    const renderButton = () => {
        return (
            <Grid container justify={"center"} item>
                <Button style={{ marginTop: "20px", marginBottom: "10px", color: "white", paddingTop: "15px", paddingBottom: "15px", paddingInline: "25px", backgroundColor: "rgba(255,255,255,0.1)" }} onClick={() => setGoProjects(true)}>View Projects</Button>
            </Grid>
        )
    }


    return (
        <div className={classes.root}>
            <Grid container justify={"center"} >
                <Paper className={classes.paper}>
                    <Grid container >
                        <Grid item>
                            <img src={MyPhoto} width={xsScreen ? "100%" : "200ch"} height={xsScreen ? "300ch" : "200ch"} className={xsScreen ? classes.imgMobile : classes.img} />
                        </Grid>
                        <Grid item xs={12} sm container style={{ margin: textPadding }}>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="h4" style={{ fontFamily: "sans-serif", color: "#bebebe" }}>
                                        About Me
                                    </Typography>
                                    <Typography variant="h6" style={{ fontFamily: "sans-serif", color: "#bebebe" }} gutterBottom>
                                        I am an engineering student at the University of Waterloo, specializing in Software Development ND Management Engineering.
                                        Currently, I am seeking co-op and internship opportunities, starting Fall 2021. During my previous co-op work term, I was a Full Stack Developer at the University of Waterloo and built
                                        the <a href='#' style={{ color: "#bebebe" }} onClick={() => window.open('http://3.14.232.195/people')}>Visualizing Historical Kitchener</a> site. Besides work, I am a devoted Formula 1 fan (Go RBR!).
                                </Typography>
                                </Grid>
                                {xsScreen ? renderButton() : ""}
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>

            {goProjects ? <Redirect to="/projects" /> : ""}
        </div>
    );
}

