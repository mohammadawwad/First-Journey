import * as api from "../api/index.js";
import {LIKE, DELETE, CREATE, UPDATE, FETCH_ALL, FETCH_BY_SEARCH} from "../constants/actionTypes"

//action creators (functions that create action)

export const getPosts = (page) => async (dispatch) => {

    //data represents posts
    try{
        const {data} = await api.fetchPosts(page);

        console.log(data);

        //same as return
        dispatch({type: FETCH_ALL, payload: data});
    } catch (error) {
        console.log(error);
    }
}

//getting posts by searching for them
export const getPostsBySearch = (searchQuery) => async (dispatch) => {
    try{
        const {data: {data}} = await api.fetchPostsBySearch(searchQuery);
        dispatch({type: FETCH_BY_SEARCH, payload: data});
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

//idk if we need this 
export const createPost = (post) => async (dispatch) => {
    try {
        const {data} = await api.createPost(post);
        dispatch({type: CREATE, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const updatePost =(id, updatedPost) => async (dispatch) => {
    try{
        const {data} = await api.updatePost(id, updatedPost);
        dispatch({type: UPDATE, payload: data})
    } catch (error) {
        console.log(error);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try{
        await api.deletePost(id);
        dispatch({type: DELETE, payload: id});
    } catch (error){
        console.log(error.message);
    }
}

export const likePost = (id) => async (dispatch) => {
    try{
        const {data} = await api.likePost(id);
        dispatch({type: LIKE, payload: data})
    } catch (error){
        console.log(error.message);
    }
}
