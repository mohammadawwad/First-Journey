import React, {useState, useEffect} from 'react'
import {AppBar, Avatar, Typography, Toolbar, Button} from "@material-ui/core";
import useStyles from "./styles";
import {Link, useHistory, useLocation} from "react-router-dom";
import {useDispatch} from "react-redux";
import decode from "jwt-decode";

const Navbar = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

    console.log(user);

    //when location changes set the user
    useEffect(() => {
        const token = user?.token;
        
        // logs you out if your 1h session token expires
        if(token){
            const decodedToken = decode(token);

            if(decodedToken.exp * 1000 < new Date().getTime()){
                logout();
            }
        }

        setUser(JSON.parse(localStorage.getItem("profile")));
    }, [location]);

    const logout = () => {
        dispatch({type: "LOGOUT"});
        history.push("/");
        setUser(null);
    };

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>  
                <Typography className={classes.heading} component={Link} to="/" variant="h2" align="center">First Journey</Typography>
                {/* <img className={classes.image} src={journey} alt="journey" height="40px"/> */}
            </div>

            <Toolbar className={classes.toolBar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                        <Button variant="contained" className={classes.logout} color="secondary" onClick={logout} >Logout</Button>
                    </div>
                ) : (
                    <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;