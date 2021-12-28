import React, {useState} from 'react';
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import {Avatar, Button, Paper, Grid, Typography, Container, TextField} from "@material-ui/core";
import useStyles from "./styles";
import Input from "./Input";

const Auth = () => {
    const classes = useStyles();
    const [isSignedUp, setIsSignedUp] = useState(false)
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = () => {

    }

    const handleChange = () => {

    }

    const handleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    }

    const switchMode = () => {
        setIsSignedUp((prevIsSignedUp) => !prevIsSignedUp);
        handleShowPassword(false);
    }

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>

                <Typography variant="h5">{isSignedUp ? "Sign Up" : "Sign In"}</Typography>

                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignedUp && (
                                <>
                                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half  />
                                    <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                                </>
                            )
                        }

                        <Input name="email" label="Email Adress" handleChange={handleChange} type="email" />
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                        
                        {
                            isSignedUp && (
                                <Input name="confirmPassword" label="Confirm Password" handleChange={handleChange} type="password" />
                            )
                        }
                    </Grid>

                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        {isSignedUp ? "Sign Up" : "Sign In"}
                    </Button>

                    <Grid contaienr justify="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                {
                                    isSignedUp ? "Have an account? Sign In" : "Don't have an account? Sign Up Now"
                                }
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
}

export default Auth
