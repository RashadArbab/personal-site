import { Card, Grid, Button, useTheme, useMediaQuery, Paper, Typography, TextField, Snackbar } from '@material-ui/core';
import Anime, { anime } from 'react-anime';
import Navbar from './navbar';
import TitlePng from '../Static/Rashad_Arbab.png';
import MyPhoto from '../Static/PhotoOfMe.jpg';
import AboutPaper from './about-paper';
import Alert from '@material-ui/lab/Alert';
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import emailjs from 'emailjs-com';



const Contact = () => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"))
    const xsScreen = useMediaQuery(theme.breakpoints.down("xs"))
    const lgScreen = useMediaQuery(theme.breakpoints.up("lg"))

    const [goProjects, setGoProjects] = useState(false);

    const textPadding = xsScreen ? "8px" : "20px"
    const cardWidth = xsScreen ? "85vw" : "60vw"

    const [open, setOpen] = useState(false);
    const [alert, setAlert] = useState({});


    function sendEmail(e) {
        e.preventDefault();

        console.log(e.target);

        emailjs.sendForm('service_ch44s5p', 'template_s8isrg9', e.target, 'user_DeWeZ1UuwarWbiedFYXx3')
            .then((result) => {
                console.log(result.text);
                var alert = {
                    open: true,
                    severity: 'success',
                    message: "Thank you for contacting me, I will get back to you soon."
                }
                setAlert(alert);
                setOpen(true)
            }, (error) => {
                console.log(error.text);
                var alert = {
                    open: true,
                    severity: 'error',
                    message: "Sorry we ran into an error, please try again."
                }
                setAlert(alert);
                setOpen(true)
            });
    }

    const formWidth = () => {
        if (xsScreen) {
            return "80vw"
        } else if (isMobile) {
            return "65vw"
        } else {
            return "45vw"
        }
    }


    const showSnackBar = () => {
        console.log(alert);
        return (
            <div>
                <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} open={open} autoHideDuration={3000} onClose={() => (setOpen(false))}>
                    <Alert variant="filled" severity={alert.severity} onClose={() => setOpen(false)}>
                        {alert.message}
                    </Alert>
                </Snackbar>
            </div>
        )

    }

    return (
        <div>
            <div>
                <Navbar type={"contact"} />
            </div>
            <div><Anime
                opacity={[0, 1]}
                easing={"easeInOutSine"}
                duration={1000}
            >
                <Grid container justify="center" alignItems="center">
                    <Paper elevation={5} style={{ width: formWidth(), borderRadius: '8px', margin: "10px", padding: "25px", position: "absolute", top: '20%' }}>
                        <form className="contact-form" onSubmit={sendEmail}>
                            <Grid container direction="column" justify="center" alignItems="center">
                                <h2>Contact Rashad</h2>
                                <TextField id="standard-basic" style={{ width: "75%" }} name='contact_name' label="Name" />
                                <TextField id="standard-basic" style={{ width: "75%" }} name='contact_email' label="Email" />
                                <TextField id="standard-basic" style={{ width: "75%" }} name='contact_phone' label="Phone" />
                                <TextField
                                    id="standard-multiline-basic"
                                    label="Subject"
                                    multiline
                                    name="subject"
                                    style={{ width: "75%" }}
                                />
                                <TextField
                                    id="standard-multiline-basic"
                                    label="Message"
                                    multiline
                                    name="message"
                                    style={{ width: "75%" }}
                                />
                                <br />
                                <Button style={{ margin: '10px' }} variant='contained' type="submit" value="Send"> Send Message </Button>
                            </Grid >
                        </form>
                    </Paper>

                </Grid>
            </Anime>
            </div>

            {open ? showSnackBar() : null}
        </div>
    );




}

export default Contact;