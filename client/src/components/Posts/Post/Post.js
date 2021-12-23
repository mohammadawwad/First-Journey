import React from "react";
import useStyles from "./styles";
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"
import moment from "moment"


const Post = ({post, setCurrentId}) => {
    const classes = useStyles();
    return(
        <Card className={classes.card}>
            {/* Image */}
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />

            {/* Creator */}
            <div className={classes.overlay}>
                <Typography varient="h6">{post.creator}</Typography>
                <Typography varient="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>

            {/* Edit */}
            <div className={classes.overlay2}>
                <Button style={{color: "white"}} size="small" onClick={() => setCurrentId(post._id)}>
                    <MoreHorizIcon frontSize="default" />
                </Button>
            </div>

            {/* Tags */}
            <div className={classes.details}>
                <Typography varient="body2" color={"textSecondary"}>{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>

            {/* Title */}
            <Typography className={classes.title} varient="h5" gutterBottom>{post.title}</Typography>

            {/* Body */}
            <CardContent>
                <Typography varient="h5" gutterBottom>{post.message}</Typography>
            </CardContent>

            {/* Like and Delete*/}
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => {}}>
                    <ThumbUpAltIcon fontSize="small" />
                    Like
                    {post.likeCount}
                </Button>

                <Button size="small" color="primary" onClick={() => {}}>
                    <DeleteIcon fontSize="small" />
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
}

export default Post;