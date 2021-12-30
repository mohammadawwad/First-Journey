import React, {useState} from 'react';
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import {Avatar, Button, Paper, Grid, Typography, Container, TextField} from "@material-ui/core";
import useStyles from "./styles";
import Input from "./Input";
import{GoogleLogin} from "react-google-login";
import Icon from "./Icon";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {signIn, signUp} from "../../actions/authAction";

const initialState = {firstName: "", lastName: "", email: "", password: "", confirmPassword: ""};

const Auth = () => {
    const classes = useStyles();
    const [isSignedUp, setIsSignedUp] = useState(false)
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const [formData, setFormData] = useState(initialState);


    const handleChange = (e) => {
        //only changes current input field
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //Sign Up
        if(isSignedUp){
            dispatch(signUp(formData, history));
        }

        //Sign In
        else{
            dispatch(signIn(formData, history));
        }
    }

    const handleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    }

    const switchMode = () => {
        setIsSignedUp((prevIsSignedUp) => !prevIsSignedUp);
        setShowPassword(false);
    }

    const googleSuccess = async (res) => {
        console.log("Google Sign In Successful");
        await console.log(res);

        //?. doest throw an error if we dont have access to the res object
        const result = res?.profileObj;
        const token = res?.tokenId;

        try {
            dispatch({type: "AUTH", data: {result, token}});
            
            //auto redirect to home page after login
            history.push("/");
        } catch (error) {
            console.log(error);
        }
    }

    const googleFailure = (error) => {
        console.log("Google Sign In Failed");
        console.log(error);
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

                    <GoogleLogin
                        clientId="47800095300-ltbv54jmv6mqfd8tpe2909c5ih209a1o.apps.googleusercontent.com"
                        render={(renderProps) => (
                        <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
                            Google Sign In
                        </Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                    />

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
