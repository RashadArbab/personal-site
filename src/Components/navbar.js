import React, { useState } from 'react'
import clsx from 'clsx';
import { AppBar, Toolbar, Divider, Drawer, Grid, IconButton, makeStyles, List, ListItem, Typography, Button, useMediaQuery, useTheme, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Redirect } from 'react-router-dom';


import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Navbar = (props) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down(900))

    const drawerWidth = 200;

    const useStyles = makeStyles((theme) => ({

        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
        button: {
            borderRadius: "8px",
            padding: "10px",
            minWidth: '200px',
            color: "white",

        },
        highlightButton: {
            borderRadius: "8px",
            padding: "10px",
            minWidth: '200px',
            color: "white",
            backgroundColor: "rgba(255,255,255,0.1)"
        },
        menuButton: {
            marginRight: theme.spacing(2)
        },
        root: {
            display: 'flex',
        },
        appBar: {
            backgroundColor: "rgba(0,0,0,0.1)",
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        hide: {
            display: 'none',
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
            backgroundColor: 'rgba(33, 34, 33, 0.5)'
        },
        drawerHeader: {
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
            justifyContent: 'flex-end',
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            marginLeft: -drawerWidth,
        },
        contentShift: {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        },
    }));


    const classes = useStyles();


    const [goAbout, setGoAbout] = useState(false);
    const [goHome, setGoHome] = useState(false);
    const [goProjects, setGoProjects] = useState(false);
    const [goContact, setGoContact] = useState(false);


    const redirectFunction = (prop) => {
        return (
            <Redirect to={`/${prop}`} />
        )
    }

    const wideNavbar = () => {
        return (
            <AppBar position="sticky" className={classes.appBar}>
                <Toolbar>
                    <Grid container direction="row" justify="space-evenly" alignItems="center">
                        <Button className={props.type === 'home' ? classes.highlightButton : classes.button} onClick={() => { setGoHome(true) }}>Home</Button>
                        <Button className={props.type === 'about' ? classes.highlightButton : classes.button} onClick={() => { setGoAbout(true) }}>About</Button>
                        <Button className={props.type === 'projects' ? classes.highlightButton : classes.button} onClick={() => { setGoProjects(true) }}>Projects</Button>
                        <Button className={props.type === 'contact' ? classes.highlightButton : classes.button} onClick={() => { setGoContact(true) }}>Contact</Button>
                        <Button onClick={() => window.open("https://github.com/RashadArbab?tab=repositories")} ><GitHubIcon fontSize="large" style={{ color: 'white' }} /> </Button>
                        <Button onClick={() => window.open("https://www.linkedin.com/in/rashadarbab/")} ><LinkedInIcon fontSize="large" style={{ color: 'white' }} /> </Button>

                    </Grid>
                </Toolbar>
            </AppBar>
        )
    }



    const [openMenu, setOpenMenu] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleDrawerOpen = () => {
        setOpenMenu(true);
    };

    const handleDrawerClose = () => {
        setOpenMenu(false);
    };

    const narrowNavbar = () => {
        return (
            <div>
                <AppBar
                    position="fixed"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: openMenu,
                    })}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, openMenu && classes.hide)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" >
                            {props.type}
                        </Typography>
                        <Grid container justify="flex-end" >
                            <Button onClick={() => window.open("https://github.com/RashadArbab?tab=repositories")} ><GitHubIcon fontSize="large" style={{ color: 'white' }} /> </Button>
                            <Button onClick={() => window.open("https://www.linkedin.com/in/rashadarbab/")} ><LinkedInIcon fontSize="large" style={{ color: 'white' }} /> </Button>

                        </Grid>
                    </Toolbar>
                </AppBar>
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={openMenu}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    style={{ backgroundColor: 'rgba(33, 34, 33, 1)' }}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={handleDrawerClose}>
                            <ChevronLeftIcon style={{ color: 'white' }} />
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        <ListItem button style={{ color: 'white', justifyContent: "center" }} onClick={() => setGoHome(true)}><Typography variant={'h5'}>Home</Typography></ListItem>
                        <ListItem button style={{ color: 'white', justifyContent: "center" }} onClick={() => setGoAbout(true)}><Typography variant={'h5'}>About</Typography></ListItem>
                        <ListItem button style={{ color: 'white', justifyContent: "center" }} onClick={() => setGoProjects(true)}><Typography variant={'h5'}>Projects</Typography></ListItem>
                        <ListItem button style={{ color: 'white', justifyContent: "center" }} onClick={() => setGoContact(true)}><Typography variant={'h5'}>Contact</Typography></ListItem>
                        <ListItem button onClick={() => window.open("https://github.com/RashadArbab?tab=repositories")} style={{ justifyContent: "center" }} ><GitHubIcon fontSize="large" style={{ color: 'white' }} /> </ListItem>
                        <ListItem button onClick={() => window.open("https://www.linkedin.com/in/rashadarbab/")} style={{ justifyContent: "center" }}><LinkedInIcon fontSize="large" style={{ color: 'white' }} /> </ListItem>

                    </List>
                    <Divider />

                </Drawer>
                <main
                    className={clsx(classes.content, {
                        [classes.contentShift]: openMenu,
                    })}
                ></main>
            </div>
        )
    }

    return (
        <div>
            {isMobile ? narrowNavbar() : wideNavbar()}
            {goHome ? redirectFunction('home') : ""}
            {goAbout ? redirectFunction('about') : ""}
            {goProjects ? redirectFunction("projects") : ""}
            {goContact ? redirectFunction("contact") : ""}
        </div>
    )
}

export default Navbar;