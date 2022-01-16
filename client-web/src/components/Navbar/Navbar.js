import React, {useState, useEffect} from 'react'
import {AppBar, Avatar, Typography, Toolbar, Button, ListItemIcon, Menu, Divider, Box, MenuItem, Fade, Tooltip, IconButton} from "@material-ui/core";
import useStyles from "./styles";
import {Link, useHistory, useLocation} from "react-router-dom";
import {useDispatch} from "react-redux";
import decode from "jwt-decode";
import logo from "../../images/logo.png";
import SettingsIcon from '@material-ui/icons/Settings';
// import LogoutIcon from '@mui/icons-material/Logout';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

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
                        
                        {/* Profile Picture*/}
                        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                        <Tooltip title="Account settings">
                            <IconButton
                                onClick={handleClick}
                                size="small"
                                sx={{ ml: 2 }}
                                aria-controls={open ? 'account-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                            >
                                <Avatar className={classes.purple} alt={user.result.name} src={user.result.profilePicture != "" ? user.result.profilePicture : user.result.imageUrl}>{user.result?.profilePicture != "" ? user.result.profilePicture : user.result.name.charAt(0)}</Avatar>
                                <ArrowDropDownIcon />
                            </IconButton>                            
                        </Tooltip>
                        </Box>

                        {/* Name */}
                        <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>



                        <Menu
                            anchorEl={anchorEl}
                            id="account-menu"
                            open={open}
                            onClose={handleClose}
                            onClick={handleClose}
                            PaperProps={{
                            elevation: 0,
                            sx: {
                                overflow: 'visible',
                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                mt: 1.5,
                                '& .MuiAvatar-root': {
                                width: 26,
                                height: 26,
                                ml: -0.5,
                                mr: 1,
                                },
                                '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 30,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                                },
                            },
                            }}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        >
                            <MenuItem>
                                <ListItemIcon>
                                    <Avatar /> 
                                </ListItemIcon>

                                My account
                            </MenuItem>

                            <Divider />

                            <MenuItem>
                                <ListItemIcon>
                                    <SettingsIcon fontSize="small" />
                                </ListItemIcon>
                                
                                Settings
                            </MenuItem>

                            <MenuItem onClick={logout}>
                                <ListItemIcon>
                                    {/* <LogoutIcon fontSize="small" /> */}
                                </ListItemIcon>

                                Logout
                            </MenuItem>
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