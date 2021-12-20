export default (postsReducer = [], action) => {
    switch(action.type){
        case "FETCH_ALL":
            //return actual posts
            return action.payload;
        
        case "CREATE":
            return [...postsReducer, action.payload];

        default:
            return postsReducer;
    }
}