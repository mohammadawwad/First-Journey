import React from "react";
import useStyles from "./styles";
import {Card, CardActions, CardContent, CardMedia, Button, ButtonBase, Typography} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"
import moment from "moment";
import {useDispatch} from "react-redux";
import {deletePost, likePost} from "../../../actions/postsAction";
import Filter from "bad-words";
import {useHistory} from "react-router-dom";

const Post = ({post, setCurrentId}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));
    const filter = new Filter();  //profanity filter
    const history = useHistory();

    const Likes = () => {
        if (post.likes.length > 0) {
          return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
            ? (
              <><ThumbUpAltIcon fontSize="small" />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}` }</>
            ) : (
              <><ThumbUpAltOutlined fontSize="small" />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
            );
        }
    
        return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
    };

    const openPost = () => {
        history.push(`/posts/${post._id}`)
    };

    return(
        <Card className={classes.card}>
            <ButtonBase className={classes.cardAction} onClick={openPost}>

                {/* Image */}
                <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />

                {/* Creator */}
                <div className={classes.overlay}>
                    <Typography varient="h6">{post.name}</Typography>
                    <Typography varient="body2">{moment(post.createdAt).fromNow()}</Typography>
                </div>

                {/* Edit that onlt creator can change*/}
                {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
                    <div className={classes.overlay2} name="edit">
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentId(post._id);
                      }}
                      style={{ color: 'white' }}
                      size="small"
                    >
                      <MoreHorizIcon fontSize="default" />
                    </Button>
                  </div>
                )}

                {/* Tags */}
                <div className={classes.details}>
                    <Typography varient="body2" color={"textSecondary"}>{post.tags.map((tag) => `#${tag} `)}</Typography>
                </div>

                {/* Title */}
                <Typography className={classes.title} varient="h5" gutterBottom>{filter.clean(post.title)}</Typography>

                {/* Body filter.clean(msg) */}
                <CardContent>
                    <Typography varient="body2" color="textSecondary" component="p">{filter.clean(post.message)}</Typography>
                </CardContent>

            </ButtonBase>

            {/* Like and Delete*/}
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" disabled={!user?.result} onClick={() => {dispatch(likePost(post._id))}}>
                    <Likes />
                </Button>

                {/* so that only the creator can delete the post */}
                {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
                    <Button size="small" color="primary" onClick={() => {dispatch(deletePost(post._id))}}>
                        <DeleteIcon fontSize="small" />
                        Delete
                    </Button>
                )}

            </CardActions>
        </Card>
    );

}

export default Post;

