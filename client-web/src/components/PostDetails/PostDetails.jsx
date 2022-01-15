import React, {useState, useEffect} from 'react';
import {Paper, Typography, CircularProgress, Divider, Grid} from "@material-ui/core";
import {Card, CardActions, CardContent, CardMedia, Button, ButtonBase} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import moment from "moment";
import {useParams, useHistory} from "react-router-dom";
import useStyles from "./styles";
import {getPost, getPostsBySearch} from "../../actions/postsAction";
import Filter from "bad-words";
import CommentSection from "./CommentSection";
import noImg from "../../images/no-img.png";
import ReportIcon from '@material-ui/icons/Report';
import ReportPost from "../Contact/ReportPost"
import Post from "../Posts/Post/Post"
import Skeleton from '@material-ui/lab/Skeleton';

const PostDetails = () => {
    const {post, posts, isLoading} = useSelector((state) => state.postsReducers);
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();
    const {id} = useParams();
    const filter = new Filter();
    const [showReport, setShowReport] = useState(false)

    //whenever the id of the post changes
    useEffect(() => {
        dispatch(getPost(id))
    }, [id]);

    useEffect(() => {
        if(post){
            console.log("POST EXISTS");
            dispatch(getPostsBySearch({search: "none", tags: post?.tags.join(",")}));
        }
    }, [post])

    if(!post){
        console.log("No Posts");
        return null;
    }

    if(isLoading){
        return ( 
            <Paper elevation={6} className={classes.loadingPaper}>
                <div className={classes.card}>
                    <div className={classes.section}>
                        <Skeleton animation="wave" width={200}/> 
                        <Skeleton animation="wave" width={400}/> 
                        <Skeleton animation="wave" width={400}/> 
                        <Skeleton animation="wave" variant="rectangular" width={450} height={150} />
                        <Skeleton animation="wave" width={250}/> 
                        <Skeleton animation="wave" variant="circular" width={40} height={40} />
                    </div>
                </div>
            </Paper>
        );
    }

    const openPost = (_id) => {
        history.push(`/posts/${_id}`)
    }

    const reportPost = () => {
        // history.push("/reportPost");
        if(showReport == false){
            setShowReport(true);
        }
        else{
            setShowReport(false);
        }
    }

    const currentPost = window.location.href;
    console.log(currentPost)

    //opend post wont be in recomended post
    const recommendedPosts = posts.filter(({_id}) => _id != post._id);

    return (
        <>
            <Paper style={{padding: '20px', borderRadius: "15px"}} elevation={6}>
                <div className={classes.card}>
                    <div className={classes.section}>
                        <Typography variant="h3" component="h2">{filter.clean(post.title)}</Typography>
                        <Typography gutterBottom variant="h6" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
                        <Typography gutterBottom variant="body1" component="p">{filter.clean(post.message)}</Typography>
                        <Typography variant="h6">Created by: {post.name}</Typography>
                        <Typography variant="body1">{moment(post.createdAt).fromNow()}</Typography>
                        <Divider style={{ margin: '20px 0' }} />
                        <CommentSection post={post} />
                        <Divider style={{ margin: '20px 0' }} />
                    </div>

                    <div className={classes.imageSection}>
                        <img className={classes.media} src={post.selectedFile || noImg} alt={post.title} />
                        {/* Report Button */}
                        <Button style={{marginTop: "10px"}} onClick={reportPost}>
                            <ReportIcon color="secondary" fontSize="large"/>
                        </Button>
                    </div>
                </div>
            </Paper>

            
            { showReport ? <ReportPost postLink={currentPost} /> : null }
        
            {/* Recomended Posts */}
            
            {recommendedPosts.length ? (
                <Paper style={{padding: '20px', borderRadius: "15px", marginTop: "20px"}} elevation={6}>
                    <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                        
                        {recommendedPosts.map(({title, message, name, likes, selectedFile, _id}) => (
                            <Grid key={post._id} item xs={12} sm={12} md={6} lg={3}>
                                
                                <div style={{margin: "20px", cursor: "pointer"}} onClick={() => openPost(_id)} key={_id}>
                                    <Card className={classes.miniCard}>

                                        {/* Title */}
                                        <Typography className={classes.miniTitle} color="textPrimary" varient="h4" gutterBottom>{filter.clean(title)}</Typography>
                                        
                                        {/* Creator */}
                                        <Typography className={classes.miniTitle} varient="h6">{`By: ${name}`}</Typography>

                                        {/* Body filter.clean(msg) */}
                                        <CardContent>
                                            <Typography varient="body1" color="textSecondary">{`${filter.clean(message.substring(0,200))}...`}</Typography>
                                        </CardContent>

                                        {/* Like Count */}
                                        <Typography className={classes.miniTitle} color="textSecondary" gutterBottom variant="body2">Likes: {likes.length}</Typography>
                                        
                                        {/* Image */}
                                        <CardMedia className={classes.miniMedia} image={selectedFile || noImg} title={title} />

                                    </Card>
                                </div>
                            </Grid>
                        ))}
                        
                    </Grid>
                </Paper>
            )
        : 
            (
                <Paper style={{padding: '20px', borderRadius: "15px", marginTop: "20px"}} elevation={6}>
                    <Typography gutterButtom variant="h6" >Check Back Later For Some Recomended Posts</Typography>
                </Paper>
            )
        }
       </>
        
    )
}

export default PostDetails;
