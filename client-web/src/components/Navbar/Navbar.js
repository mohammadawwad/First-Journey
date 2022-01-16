import React, {useState, useEffect} from 'react'
import {AppBar, Avatar, Typography, Toolbar, Button, Menu, MenuItem, Fade} from "@material-ui/core";
import useStyles from "./styles";
import {Link, useHistory, useLocation} from "react-router-dom";
import {useDispatch} from "react-redux";
import decode from "jwt-decode";
import logo from "../../images/logo.png";
import SettingsIcon from '@material-ui/icons/Settings';

const Navbar = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

    // console.log(user); for all results

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
        handleClose();
        dispatch({type: "LOGOUT"});
        history.push("/");
        setUser(null);
    };




    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <Link to="/" className={classes.brandContainer}>
                <img className={classes.image} src={logo} alt="icon" height="100px" />
            </Link>
            <Toolbar className={classes.toolBar}>

                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.profilePicture != "" ? user.result.profilePicture : user.result.imageUrl}>{user.result?.profilePicture != "" ? user.result.profilePicture : user.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                        
                        {/* User dashboard setting */}
                        <Button component={Link} 
                            to="/auth" 
                            variant="contained" 
                            color="primary"        
                            id="fade-button"
                            aria-controls={open ? 'fade-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            <SettingsIcon />
                        </Button>

                        <Menu
                            id="fade-menu"
                            MenuListProps={{
                            'aria-labelledby': 'fade-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            TransitionComponent={Fade}
                        >
                        
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                            <MenuItem onClick={logout}>Logout</MenuItem>
                        </Menu>
                        {/* <Button variant="contained" className={classes.logout} color="secondary" onClick={logout} >Logout</Button> */}
                    </div>
                ) : (
                    <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;