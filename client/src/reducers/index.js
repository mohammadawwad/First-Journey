import {combineReducers} from "redux";

import postsReducer from "./postsReducer"
import authReducer from "./authReducers"

export default combineReducers({
    postsReducer,
    authReducer,
});