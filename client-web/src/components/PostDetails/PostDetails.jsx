import React, {useEffect} from 'react';
import {Paper, Typography, CircularProgress, Divider} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import moment from "moment";
import {useParams, useHistory} from "react-router-dom";
import useStyles from "./styles";
import {getPost, getPostsBySearch} from "../../actions/postsAction";
import Filter from "bad-words";
import CommentSection from "./CommentSection";

const PostDetails = () => {
    const {post, posts, isLoading} = useSelector((state) => state.postsReducers);
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();
    const {id} = useParams();
    const filter = new Filter();

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
                <CircularProgress size="7em"/>
            </Paper>
        );
    }

    const openPost = (_id) => {
        history.push(`/posts/${_id}`)
    }

    //opend post wont be in recomended post
    const recommendedPosts = posts.filter(({_id}) => _id != post._id);

    return (
        <Paper style={{padding: '20px', borderRadius: "15px"}} elevation={6}>
            <div className={classes.card}>
                    <div className={classes.section}>
                        <Typography variant="h3" component="h2">{filter.clean(post.title)}</Typography>
                        <Typography gutterBottom variant="h6" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
                        <Typography gutterBottom variant="body1" component="p">{filter.clean(post.message)}</Typography>
                        <Typography variant="h6">Created by: {post.name}</Typography>
                        <Typography variant="body1">{moment(post.createdAt).fromNow()}</Typography>
                        <Divider style={{ margin: '20px 0' }} />
                        <Typography variant="body1"><strong>Realtime Chat - coming soon!</strong></Typography>
                        <Divider style={{ margin: '20px 0' }} />
                        <CommentSection post={post} />
                        <Divider style={{ margin: '20px 0' }} />
                        </div>
                        <div className={classes.imageSection}>
                        <img className={classes.media} src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
                    </div>
            </div>
            {recommendedPosts.length && (
                <div className={classes.section}>
                    <Typography gutterButtom variant="h5" >You Might Also Like: </Typography>
                    <Divider />

                    <div className={classes.recomendedPosts}>
                        {recommendedPosts.map(({title, message, name, likes, selectedFile, _id}) => (
                            <div style={{margin: "20px", cursor: "pointer"}} onClick={() => openPost(_id)} key={_id}>
                                <Typography gutterButtom variant="h6">{filter.clean(title)}</Typography>
                                <Typography gutterButtom variant="subtitle2">{name}</Typography>
                                <Typography gutterButtom variant="subtitle2">{filter.clean(message)}</Typography>
                                <Typography gutterButtom variant="subtitle1">Like: {likes.length}</Typography>
                                <img src={selectedFile} width="200px" />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </Paper>

        //Recomended Posts
        
    )
}

export default PostDetails;
