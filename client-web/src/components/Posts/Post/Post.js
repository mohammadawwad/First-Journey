import React, {useState} from "react";
import useStyles from "./styles";
import {Grid, Card, CardActions, CardContent, CardMedia, Button, ButtonBase, Typography} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"
import moment from "moment";
import {useDispatch} from "react-redux";
import {deletePost, likePost} from "../../../actions/postsAction";
import Filter from "bad-words";
import {useHistory} from "react-router-dom";
import noImg from "../../../images/no-img.png";
import {confirm} from "react-confirm-box";

const Post = ({post, setCurrentId}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));
    const filter = new Filter();  //profanity filter
    const history = useHistory();
	const [likes, setLikes] = useState(post?.likes);

	const userId = (user?.result.googleId || user?.result?._id);
	const hasLikedPost = likes.find((like) => like === userId);

	const handleLike = async () => {
		dispatch(likePost(post._id));

		//checks if current user liked the post
		if(hasLikedPost){
			//have liked post
			setLikes(post.likes.filter((id) => id != userId));
		} else {
			//havnt liked post
			setLikes([...post.likes, userId]);
		}
	};

    const Likes = () => {
        if (likes.length > 0) {
          return likes.find((like) => like === userId)
            ? (
              <><ThumbUpAltIcon fontSize="small" />&nbsp;{likes.length > 2 ? `You and ${likes.length - 1} others` : `${likes.length} like${likes.length > 1 ? 's' : ''}` }</>
            ) : (
              <><ThumbUpAltOutlined fontSize="small" />&nbsp;{likes.length} {likes.length === 1 ? 'Like' : 'Likes'}</>
            );
        }
    
        return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
    };

    const openPost = () => {
        history.push(`/posts/${post._id}`);
    };



	const options = {
		render: (message, onConfirm, onCancel) => {
		  return (
			<div>
				<Card className={classes.popup} style={{padding: "50px"}}>
					<Typography varient="h1" style={{margin: "7px", fontWeight: "1000", justifyContent: 'center', textAlign: "center"}}>{message}</Typography>
					<Button color="secondary" size="large" style={{margin: "7px"}} onClick={onConfirm}> Yes </Button>
					<Button color="primary" size="large"style={{margin: "7px"}} onClick={onCancel}> No </Button>
				</Card>
			</div>

		  );
		}
	};

	//confirms if you want to delete post
	const handleDelete = async () => {
		const result = await confirm("Are you sure?", options);

		if (result) {
			dispatch(deletePost(post._id));
			return;
		}
	};

    return(
        <Card className={classes.card}>
            <ButtonBase className={classes.cardAction} onClick={openPost}>

                {/* Image */}
                <CardMedia className={classes.media} image={post.selectedFile || noImg} title={post.title} />

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
                <Button size="small" color="primary" disabled={!user?.result} onClick={handleLike}>
                    <Likes />
                </Button>

                {/* so that only the creator can delete the post */}
                {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
                    <Button size="small" color="secondary" onClick={handleDelete}>
                        <DeleteIcon fontSize="small" />
                        Delete
                    </Button>
                )}

            </CardActions>
        </Card>
    );

}

export default Post;

