import axios from "axios";
import { parse } from "ipaddr.js";

//axios instance
const API = axios.create({baseURL: "http://localhost:5000"});

//middleware
API.interceptors.request.use((req) => {
    if(localStorage.getItem("profile")){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`
    }

    return req;
});

// const url = "https://first-journey.herokuapp.com/posts";

export const fetchPosts = () => API.get("/posts");
export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.searchTitle || "none"}&tags=${searchQuery.tags}`);
export const createPost = (newPost) => API.post("/posts", newPost);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

//authentication end points
export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);

