import {LIKE, DELETE, CREATE, UPDATE, FETCH_ALL, FETCH_BY_SEARCH} from "../constants/actionTypes"

export default (state = [], action) => {
    switch(action.type){
        case FETCH_ALL:
            //return actual posts
            return {
                ...state, 
                posts: action.payload.data,
                currentPage: action.payload.currentPage,
                numberOfPages: action.payload.numberOfPages,
            };

        case FETCH_BY_SEARCH: 
            return {
                ...state,
                posts: action.payload,
            };
        
        case CREATE:
            return [...state, action.payload];

        //under eachother means both do the same
        case UPDATE:
        case LIKE:
            return state.map((post) => post._id == action.payload._id ? action.payload : post);

        case DELETE:
            return state.filter((post) => post._id != action.payload);

        default:
            return state;
    }
}