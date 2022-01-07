import React, {useState, useRef} from "react";
import {Typography, Avatar, TextField, Button} from "@material-ui/core";
import {useDispatch} from "react-redux";
import useStyles from "./styles";
import {commentPost} from "../../actions/postsAction";

const CommentSection = ({post}) => {

    const classes = useStyles();
    const [comments, setComments] = useState(post?.comments);
    const [comment, setComment] = useState("");
    const user = JSON.parse(localStorage.getItem("profile"));
    const dispatch = useDispatch();

    //hook for scrolling
    const commentsRef = useRef();

    const handleComment = async () => {
        const finalComment = `${user.result.name}: ${comment}`
        const newComments = await dispatch(commentPost(finalComment, post._id));
        setComments(newComments);
        setComment('');

        //scrols down to latest comment
        commentsRef.current.scrollIntoView({behaviour: "smooth"});
    };

    return (
        <div>
            <div className={classes.commentsOuterContainer}>
                <div className={classes.commentsInnerContainer}>
                    <Typography gutterButtom variant="h6">Comment</Typography>
                    
                    {/* Loops over the comments, c- comments, i- index*/}
                    {
                        comments.map((c, i) => (
                            <Typography key={i} gutterBottom variant="subtitle1">
                                <strong>{c.split(": ")[0]}</strong> {/*Makes name Bold */}
                                {c.split(": ")[1]}
                            </Typography>
                        ))
                    }

                    <div ref={commentsRef} />
                </div>

                {/* only allows to comments if user is loged in */}
                {user?.result?.name && (
                    <div style={{width: "40%"}}>
                        <Typography gutterButtom variant="h6">Leave a Comment</Typography>

                        <TextField 
                            fullWidth
                            rows={4}
                            variant="outlined"
                            label="Comment"
                            multiline
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        />

                        {/* Comment Submit Button */}
                        <Button style={{marginTop: "10px"}} fullWidth disabled={!comment} variant="contained" color="primary" onClick={handleComment}>
                            Comment
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );

};

export default CommentSection;