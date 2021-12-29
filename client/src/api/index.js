import axios from "axios";
import { parse } from "ipaddr.js";

//axios instance
const API = axios.create({baseURL: "http://localhost:5000"});

//middleware
API.interceptors.request.use((req) => {
    if(localStorage.getItem("profile")){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`
    }

    return req;
})

// const url = "https://first-journey.herokuapp.com/posts";

export const fetchPosts = () => API.get("/posts");
export const createPost = (newPost) => API.post("/posts", newPost);
export const updatePost = (id) => API.patch(`/posts/${id}/likePost`);
export const deletePost = (id) => axios.delete(`/posts/${id}`);
export const likePost = (id) => axios.patch(`/posts/${id}/likePost`);

//authentication end points
export const signIn = (formData) => API.post("user/signin", formData);
export const signUp = (formData) => API.post("user/signup", formData);