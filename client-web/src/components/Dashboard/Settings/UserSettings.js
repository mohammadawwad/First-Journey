import React, {useState} from "react";
import {useSelector} from "react-redux";
import Skeleton from '@material-ui/lab/Skeleton';
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import {Avatar, Button, Paper, Grid, Typography, Container, TextField} from "@material-ui/core";
import useStyles from "./styles";
import Input from "../../Auth/Input";
import Icon from "../../Auth/Icon";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {signIn, signUp} from "../../../actions/authAction";
import FileBase from "react-file-base64";
import {confirm} from "react-confirm-box";


const UserSettings = () => {
    
    const user = JSON.parse(localStorage.getItem("profile"));

    
    var firstName = user?.result.name.split(' ').slice(0, -1).join(' ');
    var lastName = user?.result.name.split(' ').slice(-1).join(' ');
    const initialState = {firstName: firstName, lastName: lastName, email: user?.result.email, password: "", confirmPassword: "", profilePicture: user?.result.profilePicture};

    // console.log(initialState);

    const classes = useStyles();
    const [isSignedUp, setIsSignedUp] = useState(false)
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const [formData, setFormData] = useState(initialState);



    const handleChange = (e) => {
        //only changes current input field
        setFormData({...formData, [e.target.name]: e.target.value});

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData)
    }

    const handleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    }

    const switchMode = () => {
        setIsSignedUp((prevIsSignedUp) => !prevIsSignedUp);
        setShowPassword(false);
    }
    
    return(
        // isLoading ?
        
        // (  
        //     <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        //         <Grid item xs={12} sm={12} md={6} lg={3}>
        //             <Skeleton animation="wave" variant="circle" width={40} height={40} />
        //             <Skeleton animation="wave" width={250}/> 
        //             <Skeleton animation="wave" variant="rectangular" width={250} height={200} />
        //             <Skeleton animation="wave" width={250}/> 
        //             <Skeleton animation="wave" width={250}/> 
        //             <Skeleton animation="wave" width={150}/> 
        //         </Grid>
        //     </Grid>
        // )

        
        // : (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>

                <Typography variant="h5">Your Settings</Typography>

                <form className={classes.form}>
                    <Grid container spacing={2}>
                        <Input name="firstName" label="Edit First Name" handleChange={handleChange} autoFocus half  />
                        <Input name="lastName" label="Edit Last Name" handleChange={handleChange} half />
                        <Input name="email" label="Edit Email Adress (case sensitive)" handleChange={handleChange} type="email" />
                        {/* <Input name="password" label="Edit Password (min. 7)"   inputProps={{minLength: 7}} handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} /> */}
                        {/* <Input name="confirmPassword" inputProps={{minLength: 7}} label="Confirm Password (min. 7)" handleChange={handleChange} type="password" /> */}
                        <div className={classes.fileInput}>
                            <Typography varient="body2" color="primary" style={{marginLeft: "10px"}}>Update Profile Picture</Typography>
                            <FileBase type="file" multiple={false} onDone={({base64}) => setFormData({...formData, profilePicture: base64})}/>
                        </div>
                    </Grid>

                    <Button onClick={handleSubmit} fullWidth variant="contained" color="primary" className={classes.submit}>
                        Update
                    </Button>
                </form>
            </Paper>
        </Container>
        // )
    );
}

export default UserSettings;

