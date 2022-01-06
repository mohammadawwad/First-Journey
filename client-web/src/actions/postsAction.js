import * as api from "../api/index.js";
import {LIKE, DELETE, CREATE, UPDATE, FETCH_ALL, FETCH_BY_SEARCH, START_LOADING, END_LOADING, FETCH_POST, COMMENT} from "../constants/actionTypes"

// //action creators (functions that create action)

export const getPost = (id) => async (dispatch) => {

    //data represents posts
    try{
        dispatch({type: START_LOADING});
        const {data} = await api.fetchPost(id);

        //same as return
        dispatch({ type: FETCH_POST, payload: { post: data } });
        dispatch({type: END_LOADING});
    } catch (error) {
        console.log(error);
    }
}

export const getPosts = (page) => async (dispatch) => {

    //data represents posts
    try{
        dispatch({type: START_LOADING});
        const { data: { data, currentPage, numberOfPages } } = await api.fetchPosts(page);
        dispatch({ type: FETCH_ALL, payload: { data, currentPage, numberOfPages } });
        dispatch({type: END_LOADING});
    } catch (error) {
        console.log(error);
    }
}

//getting posts by searching for them
export const getPostsBySearch = (searchQuery) => async (dispatch) => {
    try{
        dispatch({type: START_LOADING});
        const {data: {data}} = await api.fetchPostsBySearch(searchQuery);
        dispatch({type: FETCH_BY_SEARCH, payload: {data}});
        dispatch({type: END_LOADING});
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

//idk if we need this 
export const createPost = (post, history) => async (dispatch) => {
    try {
        dispatch({type: START_LOADING});
        const {data} = await api.createPost(post);
        history.push(`/posts/${data._id}`);
        dispatch({type: CREATE, payload: data});
        dispatch({type: END_LOADING});
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
        console.log(error);
    }
}

export const likePost = (id) => async (dispatch) => {
    try{
        const {data} = await api.likePost(id);
        dispatch({type: LIKE, payload: data})
    } catch (error){
        console.log(error);
    }
}

export const commentPost = (value, id) => async (dispatch) => {
    try{
        // return a new post with an array of comments
        const {data} = await api.comment(value, id);
        
        dispatch({type: COMMENT, payload: data});
        return data.comments;
    } catch (error) {
        console.log(error);
    }
}
