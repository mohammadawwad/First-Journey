import express from 'express';

import { getPosts, getPostsBySearch, getPost, createPost, updatePost, likePost, deletePost, commentPost} from '../controllers/postsController.js';

const router = express.Router();
import auth from "../middleware/authMidware.js";

//if it says authMidware it checks for perms then does what it needs to do
//all begine with /posts but u cant see it here

router.get('/search', getPostsBySearch);
router.get('/', getPosts);
router.get('/:id', getPost);

router.post('/', auth,  createPost);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/likePost', auth, likePost);
router.post('/:id/commentPost', auth, commentPost);

export default router;