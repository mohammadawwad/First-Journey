import * as api from "../api";

//action creators (functions that create action)

export const getPosts = () => async (dispatch) => {

    //data represents posts
    try{
        const {data} = await api.fetchPosts();

        //same as return
        dispatch({type: "FETCH_ALL", payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const {data} = await api.createPost(post);
        dispatch({type: "CREATE", payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const updatePost =(id, updatedPost) => async (dispatch) => {
    try{
        const {data} = await api.updatePost(id, updatedPost);
        dispatch({type: "UPDATE", payload: data})
    } catch (error) {
        console.log(error);
    }
}