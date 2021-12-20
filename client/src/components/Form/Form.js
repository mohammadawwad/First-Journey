import React, {useState} from "react";
import useStyles from "./styles";
import {TextField, Button, Typography, Paper} from "@material-ui/core";
import FileBase from "react-file-base64"
import {useDispatch} from "react-redux";
import {createPost} from "../../actions/postsAction"

const Form = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [postData, setPostData] = useState({
        creator: "", tittle: "", message: "", tags: "", selectedFile: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPost(postData));
    }

    const clear = () => {
        document.getElementById("newForm").reset();
    }
    
    return(
        //paper is like a div with styling
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.route} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">Create a Journey</Typography>
                <TextField name="creator" variaant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({...postData, creator: e.target.value})} />
                <TextField name="title" variaant="outlined" label="title" fullWidth value={postData.title} onChange={(e) => setPostData({...postData, title: e.target.value})} />
                <TextField name="message" variaant="outlined" label="message" fullWidth value={postData.message} onChange={(e) => setPostData({...postData, message: e.target.value})} />
                <TextField name="tags" variaant="outlined" label="tags" fullWidth value={postData.tags} onChange={(e) => setPostData({...postData, tags: e.target.value})} />

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