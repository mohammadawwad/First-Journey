import express from "express";
import {getPosts, getPostsBySearch, createPost, updatePost, deletePost, likePost} from "../controllers/postsController.js";
import authMidware from "../middleware/authMidware.js";

const router = express.Router();

//if it says authMidware it checks for perms then does what it needs to do
//all begine with /posts but u cant see it here

router.get('/', getPosts);
router.get('/searchTitle', getPostsBySearch);
router.post('/', authMidware, createPost);
//patch is used for updating existing docs
router.patch("/:id", authMidware, updatePost);
router.delete("/:id", authMidware, deletePost);
router.patch("/:id/likePost", authMidware, likePost);


export default router;