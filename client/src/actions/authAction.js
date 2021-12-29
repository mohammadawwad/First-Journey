import * as api from "../api";
import {AUTH} from "../constants/actionTypes"

export const signIn = (formData, history) => async (dispatch) => {
    try {
        //log in the user
        //navigates to home page after
        history.push("/");
        dispatch();
    } catch (error) {
        console.log(error);
    }
}

export const signUp = (formData, history) => async (dispatch) => {
    try {
        //sign up the user
        //navigates to home page after
        history.push("/");
        dispatch();
    } catch (error) {
        console.log(error);
    }
}