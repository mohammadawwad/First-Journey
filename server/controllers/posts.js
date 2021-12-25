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

    const newPost = new PostMessage(post);

    try{
        await newPost.save();
        res.status(201).json(newPost);
    } catch {
        res.status(409).json({message: error.message});
    }
}

//posts/123 <- id
export const updatePost = async (req, res) => {
    const {id: _id} = req.params;
    const post = req.body;
    
    //checks if id is valid
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send("No post with that Id");
    }

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, {...post, _id}, {new: true});

    res.json(updatedPost);
}

//post deleter
export const deletePost = async(req, res) => {
    const {id} = req.params

    //checks if id is valid
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send("No post with that Id");
    }

    await PostMessage.findByIdAndRemove(id);

    res.json({message: "Post deleted successfully"})
}

//post liker
export const likePost = async (req,res) => {
    const {id} = req.params

    //checks if id is valid
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send("No post with that Id");
    }

    const post = await PostMessage.findById(id);
    const updatedPost = await PostMessage.findByIdAndUpdate(id, {likeCount: post.likeCount + 1}, {new: true});

    res.json(updatedPost);
}