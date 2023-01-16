import React, { useState } from "react";
import { Grid, TextField, Button, Typography, Container } from '@mui/material';

const FORM_ENDPOINT = ""; // TODO - fill on the later step

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className="">Thank you!</div>
        <div className="">I'll be in touch soon.</div>
      </>
    );
  }

  return (
    <Container className="contact-form">
    <form>
        <Grid container spacing={1}>
            <Grid xs={12} sm={6} item>
                <TextField placeholder="Enter first name" label="First Name" variant="outlined" fullWidth required />
            </Grid>
            <Grid xs={12} sm={6} item>
                <TextField placeholder="Enter last name" label="Last Name" variant="outlined" fullWidth required />
            </Grid>
            <Grid item xs={12}>
                <TextField type="email" placeholder="Enter an email" label="Email" variant="outlined" fullWidth required />
            </Grid>
            <Grid item xs={12}>
                <TextField type="number" placeholder="Enter a phone number" label="Phone" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12}>
                <TextField label="Message" multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth required />
            </Grid>
            <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
            </Grid>
        </Grid>
    </form>
    </Container>
  );
};

export default Contact;