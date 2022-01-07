import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {useHistory} from "react-router-dom";
import {TextField, Button, Typography, Paper, Input, IconButton} from "@material-ui/core";
import useStyles from "./styles"

const ContactUs = () => {
  const form = useRef();
  const history = useHistory();
  const classes = useStyles();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'contactUs', form.current, 'user_5kSDfu7vNgvO65gF57lKL')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
      history.push("/");
  };

  return (

        <Paper className={classes.paper} elevation={6}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} ref={form} onSubmit={sendEmail}>
                <Typography variant="h6" >Contact Us</Typography>
                <TextField required name="user_name" variant="outlined" label="Name" fullWidth/>
                <TextField required name="user_email" variant="outlined" label="Email Adress" fullWidth/>
                <TextField required name="message" variant="outlined" label="Message" multiline rows={5} fullWidth/>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large"  type="submit" value="Send" fullWidth>Submit</Button>
            </form>
        </Paper>
  );
};

export default ContactUs;