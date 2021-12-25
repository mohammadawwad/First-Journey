import {LIKE, DELETE, CREATE, UPDATE, FETCH_ALL} from "../constants/actionTypes"

export default (postsReducer = [], action) => {
    switch(action.type){
        case FETCH_ALL:
            //return actual posts
            return action.payload;
        
        case CREATE:
            return [...postsReducer, action.payload];

        //under eachother means both do the same
        case UPDATE:
        case LIKE:
            return postsReducer.map((post) => post._id == action.payload._id ? action.payload : post);

        case DELETE:
            return postsReducer.filter((post) => post._id != action.payload);

        default:
            return postsReducer;
    }
}