import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    name: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likes: {
        //array of id's of people who liked
        type: [String],
        default: [],
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});

//Mongoose Model
var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;