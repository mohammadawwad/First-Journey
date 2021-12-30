import * as api from "../api/index.js";
import {AUTH} from "../constants/actionTypes"

export const signIn = (formData, history) => async (dispatch) => {
    try {
        //sign in the user
        const {data} = await api.signIn(formData);
        dispatch({type: AUTH, data});

        //navigates to home page after
        history.push("/");
    } catch (error) {
        console.log(error);
    }
}

export const signUp = (formData, history) => async (dispatch) => {
    try {
        //sign up the user
        const {data} = await api.signUp(formData);
        dispatch({type: AUTH, data});

        //navigates to home page after
        history.push("/");
    } catch (error) {
        console.log(error);
    }
}