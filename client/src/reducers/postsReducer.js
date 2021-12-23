export default (postsReducer = [], action) => {
    switch(action.type){
        case "FETCH_ALL":
            //return actual posts
            return action.payload;
        
        case "CREATE":
            return [...postsReducer, action.payload];

        case "UPDATE":
            return postsReducer.map((post) => post._id == action.payload._id ? action.payload : post)

        default:
            return postsReducer;
    }
}