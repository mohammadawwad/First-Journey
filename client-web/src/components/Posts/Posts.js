import React from "react";
import Post from "./Post/Post"
import useStyles from "./styles";
import {useSelector} from "react-redux";
import {Grid, CircularProgress} from "@material-ui/core";
import Skeleton from '@material-ui/lab/Skeleton';


const Posts = ({setCurrentId}) => {
    const classes = useStyles();
    const {posts, isLoading} = useSelector((state) => state.postsReducers);
    console.log("POSTS: "+ posts);

    if(!posts.length && !isLoading){
        return "No Posts, would you like to be the first 😃"
    }
    
    return(
        isLoading ? <Skeleton animation="wave" /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {
                    posts.map((post) => (
                        <Grid key={post._id} item xs={12} sm={12} md={6} lg={3}>
                            <Post post={post} setCurrentId={setCurrentId} elevation={6}/>
                        </Grid>
                    ))
                }
            </Grid>
        )
    );
}

export default Posts;

