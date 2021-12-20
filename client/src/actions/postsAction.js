import * as api from "../api";

//action creators (functions that create action)

export const getPosts = () => async (dispatch) => {

    //data represents posts
    try{
        const {data} = await api.fetchPosts();

        //same as return
        dispatch({type: "FETCH_ALL", payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const {data} = await api.createPost(post);
        dispatch({type: "CREATE", payload: data});
    } catch (error) {
        console.log(error.message);
    }
}