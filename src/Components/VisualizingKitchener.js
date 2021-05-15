import { Typography, Grid, useMediaQuery, useTheme } from "@material-ui/core";

import React from 'react';
import { makeStyles, Accordion, AccordionSummary, classes, AccordionDetails, Card, CardContent, CardMedia } from '@material-ui/core';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



const visKitch = () => {


    return (
        <div>
            <Grid container justify="center" >
                <Typography variant={"h2"} style={{ color: "white" }}>Visualizing Historical Kitchener</Typography>
                <Typography variant={"h4"} style={{ color: "white" }}>A scalable website that visualizes the City of Kitchener’s historical archives</Typography>
                <Paper elevation={5} style={{ marginTop: "25px", paddingTop: "10px", paddingBottom: "10px", borderRadius: "8px", backgroundColor: "rgba(33, 34, 33, 1)" }}>
                    <Grid container justify="center">
                        <VerticalLinearStepper />
                        <Button variant={"outlined"} style={{ borderColor: "white", color: "white" }} onClick={() => window.open("http://3.14.232.195/")}>Go to site</Button>
                    </Grid>
                </Paper>
            </Grid>
        </div>
    )
}



const useStyles = makeStyles((theme) => ({


    root: {
        width: '100%',

    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    actionsContainer: {
        marginBottom: theme.spacing(2),

    },
    resetContainer: {
        padding: theme.spacing(3),


    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    cardRoot: {
        display: 'flex',
        marginInline: '8px',
        marginTop: '8px',
        padding: '3px',
        maxWidth: '100%'
    },
    mobileCardRoot: {
        display: 'flex',
        marginInline: '0px',
        marginTop: '8px',
        padding: '3px',
        maxWidth: '100%'
    },
    cardDetails: {
        display: 'flex',
        flexDirection: 'column',
    },
    cardContent: {
        flex: '1 0 auto',
    },
    cardCover: {
        width: 151,
    },
    cardControls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    cardPlayIcon: {
        height: 38,
        width: 38,
    },
}));

function getSteps() {
    return [
        <Typography variant={"h6"} style={{ color: "white" }}>Project Description</Typography>,
        <Typography variant={"h6"} style={{ color: "white" }}>What I did</Typography>,
        <Typography variant={"h6"} style={{ color: "white" }}>The stack I used</Typography>,
    ];
}

function getStepContent(step) {

    switch (step) {
        case 0:
            return (
                {
                    items: ["no data"]
                }
            )
        case 1:
            return (
                {
                    items: [{
                        title: 'Client Site',
                        secondaryHeading: 'A scalable website that visualizes the City of Kitchener’s historical archives',
                        body: [
                            'Used Google Maps to create an interactive map of residents and businesses',
                            'Building an intelligent and intuitive frontend product with the use of REACT/REDUX',

                            'Used MongoDB to index, store, search and filter data',
                        ]
                    },
                    {
                        title: 'Service Provider Portal',
                        secondaryHeading: 'A secure backend portal for service providers',
                        body: [
                            "Created a sign up portal that allows service providers to sign up and list their services",
                            "Used Google Maps api to geolocate and pin the location of the service",
                            "Built functionality for service providers to create different types of services Independant Doctor, Hospital, Ambulance Service"]
                    },
                    {
                        title: 'Backend Server',
                        secondaryHeading: 'The backend for the whole project',
                        body: [
                            'Built a clustered light weight NodeJS and Express server',
                            'Used GraphQL for building api endpoints and accessing data',
                        ]
                    },
                    {

                        title: 'Devops',
                        secondaryHeading: 'The platform for developing and hosting the visualizing historical kitchener client and admin website',
                        body: [
                            'Created an AWS VPC that is scalable and can grow different elements as needed',
                            'Configured an Nginx reverse-proxy to redirect site requests to the node server',
                            'EC2 for hosting the website, and running the Nginx, Nodejs server',
                            'EC2 for hosting the MongoDB databse allowing for different rates of scaling and a specialized instance for databases'
                        ]

                    }
                    ]
                }
            )
        case 2:
            return (
                {
                    items: [{
                        title: 'Frontend',
                        stackItems: [

                            {
                                logoLink: `${process.env.PUBLIC_URL}/reactLogo.png`,
                                label: "React",
                                description: "Light weight frontend library"
                            },
                            {
                                logoLink: `${process.env.PUBLIC_URL}/reduxLogo.png`,
                                label: "Redux",
                                description: "State management tool"

                            },
                            {
                                logoLink: `${process.env.PUBLIC_URL}/leafletLogo.png`,
                                label: "Leaflet",
                                description: "For rendering the map"
                            },
                        ]
                    },
                    {
                        title: 'Backend',
                        stackItems: [
                            {
                                logoLink: `${process.env.PUBLIC_URL}/nodeLogo.png`,
                                label: "NodeJS",
                                description: "Backend environment"
                            },
                            {
                                logoLink: `${process.env.PUBLIC_URL}/expressLogo.png`,
                                label: "Express",
                                description: "Server framework"
                            },
                        ],
                    },
                    {
                        title: 'Data',
                        stackItems: [
                            {
                                logoLink: `${process.env.PUBLIC_URL}/postgresLogo.png`,
                                label: "Postgresql",
                                description: "Database for tabular site data"
                            },
                            {
                                logoLink: `${process.env.PUBLIC_URL}/mongoLogo.png`,
                                label: "MongoDB",
                                description: "Database for the admin site and user profiles"
                            },
                        ],
                    },
                    {
                        title: 'Devops',
                        stackItems: [
                            {
                                logoLink: `${process.env.PUBLIC_URL}/awsLogo.png`,
                                label: "AWS",
                                description: "Cloud platform"
                            },
                            {
                                logoLink: `${process.env.PUBLIC_URL}/awsEC2Logo.png`,
                                label: "AWS EC2",
                                description: "Server for hosting the website"
                            },
                            {
                                logoLink: `${process.env.PUBLIC_URL}/awsRDSLogo.png`,
                                label: "AWS RDS",
                                description: "Server for hosting the sql database"
                            },
                            {
                                logoLink: `${process.env.PUBLIC_URL}/nginxLogo.png`,
                                label: "Nginx",
                                description: "frontline server and load balancer"
                            },
                            {
                                logoLink: `${process.env.PUBLIC_URL}/dockerLogo.png`,
                                label: "Docker",
                                description: "Containerizer"
                            },

                        ]
                    }

                    ]
                }
            )

        default:
            return (
                {
                    items: [{
                        title: 'Client',
                        body: [
                            'Used Leaflet to create an interactive map of residents and businesses',
                            'Built an intelligent and intuitive frontend product with the use of REACT/REDUX',
                            'Built a clustered light weight NodeJS and Express server',
                            'Used PostgreSQL to index, store, search and filter data',
                        ]
                    }]
                }
            )
    }
}

function VerticalLinearStepper() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        if (activeStep === 2) {
            setActiveStep(0, 1, 2)
        }
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down(450))



    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} style={{ width: "96vw", backgroundColor: "rgba(33, 34, 33, 1)" }} orientation="vertical">
                {steps.map((label, index) => (
                    <Step key={label} >
                        <StepLabel style={{ color: "white" }}>{label}</StepLabel>
                        <StepContent>
                            {getStepContent(index).items.map((element) => {
                                if (index === 1 || index === 2) {
                                    return (
                                        <Accordion style={{ borderRadius: "8px", marginTop: "3px" }}>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                            >
                                                <Typography className={classes.heading}>{element.title}</Typography>
                                                <Typography className={classes.secondaryHeading}>{element.secondaryHeading}</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                {index === 1 ?
                                                    < Grid container direction="column">
                                                        {element.body.map((bodyElement) => {
                                                            return (<li>{bodyElement}</li>
                                                            )
                                                        })}
                                                    </Grid>
                                                    : null}

                                                {index === 2 ?


                                                    <Grid container>
                                                        {
                                                            element.stackItems.map((stackElement) => {
                                                                return (
                                                                    <Paper elevation={3} className={isMobile ? classes.mobileCardRoot : classes.cardRoot}>
                                                                        <div className={classes.cardDetails}>
                                                                            <CardContent className={classes.cardContent}>
                                                                                <Typography component="h5" variant="h5">
                                                                                    {stackElement.label}
                                                                                </Typography>
                                                                                <Typography variant="subtitle1" color="textSecondary">
                                                                                    {stackElement.description}
                                                                                </Typography>
                                                                            </CardContent>
                                                                        </div>
                                                                        <CardMedia

                                                                            height="140"
                                                                            className={classes.cardCover}
                                                                            title={stackElement.label}
                                                                        >
                                                                            <img src={stackElement.logoLink} height={100} width={120} />
                                                                        </CardMedia>
                                                                    </Paper>
                                                                )
                                                            })
                                                        }
                                                    </Grid>
                                                    : null}
                                            </AccordionDetails>
                                        </Accordion>
                                    )
                                }
                                else {
                                    return (
                                        <Paper elevation={3} style={{ padding: '8px' }}>
                                            <Typography>
                                                This initiative aims to provide scholars, researchers, and the public with a
                                                visual directory, index, and account of Kitchener's residential, business and industrial development.
                                                I was responsible of building the web platform for the project which included bulding a website for users to view, search and filter the data,
                                                an admin website for iterating and uploading data as datasets are validated, and finding a solution for hosting the website.
                                        </Typography>
                                        </Paper>
                                    )
                                }
                            })
                            }
                            <div className={classes.actionsContainer}>
                                <div>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        style={{ color: "white" }}
                                        className={classes.button}
                                    >Back</Button>
                                    <Button
                                        variant="contained"
                                        style={{ backgroundColor: "white", color: "black" }}
                                        onClick={handleNext}
                                        className={classes.button}
                                    >
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                </div>
                            </div>
                        </StepContent>
                    </Step>
                ))}

            </Stepper>
            {
                activeStep === steps.length && (
                    <Paper square elevation={0} className={classes.resetContainer}>
                        <Typography>All steps completed - you&apos;re finished</Typography>
                        <Button onClick={handleReset} className={classes.button}>
                            Reset
          </Button>
                    </Paper>
                )
            }
        </div >
    );
}

export default visKitch;