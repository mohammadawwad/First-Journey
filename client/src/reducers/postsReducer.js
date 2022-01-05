import {LIKE, DELETE, CREATE, UPDATE, FETCH_ALL, FETCH_BY_SEARCH, START_LOADING, END_LOADING, FETCH_POST} from "../constants/actionTypes"

export default (state = {isLoading: true, posts: []}, action) => {
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
                posts: action.payload.data,
            };
        
        case FETCH_POST: 
            return {
                ...state,
                post: action.payload.post,
            };
        
        case CREATE:
            return {...state, posts: [...state.postsReducer, action.payload]};

        case UPDATE:
            return {...state, posts: state.postsReducer.map((post) => post._id == action.payload._id ? action.payload : post)};

        case LIKE:
            return {...state, posts: state.postsReducer.map((post) => post._id == action.payload._id ? action.payload : post)};

        case DELETE:
            return {...state, posts: state.postsReducer.filter((post) => post._id != action.payload)};

        case START_LOADING: 
            return {
                ...state, 
                isLoading: true,
            };

        case END_LOADING: 
            return {
                ...state, 
                isLoading: false,
            };

        default:
            return state;
    }
}
