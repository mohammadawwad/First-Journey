import React, {useState, useEffect} from "react";
import useStyles from "./styles";
import {TextField, Button, Typography, Paper} from "@material-ui/core";
import FileBase from "react-file-base64";
import {useDispatch, useSelector} from "react-redux";
import {createPost, updatePost} from "../../actions/postsAction";
import {useHistory} from "react-router-dom";

const Form = ({currentId, setCurrentId}) => {
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem("profile"));
    const history = useHistory();

    const [postData, setPostData] = useState({
        title: "", message: "", tags: "", selectedFile: ""
    });

    const post = useSelector((state) => (currentId ? state.postsReducer.posts.find((p) => p._id == currentId) : null));
    console.log("TTTTTTTTTTTTTTTTT: " + post);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!post?.title) clear();
        if(post) setPostData(post);
    }, [post])

    const handleSubmit = (e) => {
        e.preventDefault();

        if(currentId == 0){
            dispatch(createPost({...postData, name: user?.result?.name}, history));
            clear();
        }
        else{
            dispatch(updatePost(currentId,{...postData, name: user?.result?.name}));
            clear();
        }


    }

    const clear = () => {
        setCurrentId(0);
        setPostData({title: "", message: "", tags: [], selectedFile: ""});
    }

    //no user loged in means cannot create a post
    if(!user?.result?.name){
        return(
            <Paper className={classes.paper}> 
                <Typography variant="h6" align="center">
                    Please Login or Sign Up to create a post, like, and comment.
                </Typography>
            </Paper>
        )
    }
    
    return(
        //paper is like a div with styling
        <Paper className={classes.paper} elevation={6}>
            <form autoComplete="off" noValidate className={`${classes.route} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? "Editing " : "Creating "}a Journey</Typography>
                {/* <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({...postData, creator: e.target.value})} /> */}
                <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({...postData, title: e.target.value})} />
                <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(e) => setPostData({...postData, message: e.target.value})} />
                <TextField name="tags" variant="outlined" label="Tags ','" fullWidth value={postData.tags} onChange={(e) => setPostData({...postData, tags: e.target.value.split(',')})} />

                <div className={classes.fileInput}>
                    <FileBase type="file" multiple={false} onDone={({base64}) => setPostData({...postData, selectedFile: base64})}/>
                </div>

                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
}

export default Form;