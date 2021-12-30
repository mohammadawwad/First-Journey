//handlers for routes
import express from 'express';
import mongoose from 'mongoose';

import PostMessage from "../models/postMessage.js"

export const getPosts = async (req, res) => {
    try{
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages);
    } catch (error){
        res.status(404).json({message: error.message});
    }
}

//post creator
export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new PostMessage({...post, creator: req.userId, createdAt: new Date().toISOString()});

    try{
        await newPost.save();
        res.status(201).json(newPost);
    } catch {
        res.status(409).json({message: error.message});
    }
}

//posts/123 <- id
export const updatePost = async (req, res) => {
    const { id } = req.params;
    
    const { title, message, creator, selectedFile, tags } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

//post deleter
export const deletePost = async(req, res) => {
    const {id} = req.params;

    //checks if id is valid
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send("No post with that Id");
    }

    await PostMessage.findByIdAndRemove(id);

    res.json({message: "Post deleted successfully"})
}

//post liker
export const likePost = async (req, res) => {
    const {id} = req.params;

    //user not authenticated
    if(!req.userId){
        return res.json({message: "Not Authenticated"})
    }

    //checks if id is valid
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send("No post with that Id... " + id);
    }

    const post = await PostMessage.findById(id);

    //loops thru all id's to check if you already liked the specific post
    const index = post.likes.findIndex((id) => id === String(req.userId));

    //hasnt liked yet 
    if(index === -1){
        post.likes.push(req.userId);
    }
    else{
        //dislike post
        //loops thru all id's and removes the id from the array of likes
        post.likes = post.likes.filter((id) => id !== String(req.userId));
    }

    //updateing post
    const updatedPost = await PostMessage.findByIdAndUpdate(id, post, {new: true});

    res.status(200).json(updatedPost);
}