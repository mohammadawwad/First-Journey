import React, {useState, useEffect} from 'react'
import {Container, Grow, Grid, Paper, AppBar, TextField, Button} from "@material-ui/core";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import {useDispatch} from "react-redux"
import useStyles from "./styles";
import Paging from "../Paging/Paging";
import {useHistory, useLocation} from "react-router-dom";
import ChipInput from "material-ui-chip-input";
import {getPosts, getPostsBySearch} from "../../actions/postsAction"


const useQuery = () => { ///Search or searchTitle
    return new URLSearchParams(useLocation().search);
}


const Home = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const query = useQuery();
    const history = useHistory();
    const page = query.get("page") || 1;
    const searchQuery = query.get("searchQuery");
    const [currentId, setCurrentId] = useState(null);
    const [search, setsearch] = useState("");
    const [tags, setTags] = useState([]);

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    const handleKeyPress = (e) => {
        if(e.keyCode == 13){
            //search for the post if enter is clicked
            searchPost();
        }
    }

    const handleAdd = (tagToAdd) => {
        setTags([...tags, tagToAdd]);
    }

    const handleDelete = (tagToDelete) => {
        setTags(tags.filter((tag) => tag != tagToDelete));
    }

    const searchPost = () => {
        if(search.trim() || tags){
            //dispatch to fetch our search post [europe, usa] -> "europe,usa"
            dispatch(getPostsBySearch({search, tags: tags.join(",")}));
            history.push(`/posts/search?searchQuery=${search || "none"}&tags=${tags.join(",")}`);
        } else {
            history.push("/");
        }
    }

    return (
        <Grow in>
            <Container maxWidth="xl">
                <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={3} className={classes.gridContainer}>
                    <Grid item xs={12} sm={6} md={9}>
                        <Posts setCurrentId={setCurrentId}/>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <AppBar className={classes.appBarSearch} position="static" color="inherit">
                            <TextField name="search" variant="outlined" label="Search Journies" fullWidth value={search} onKeyPress={handleKeyPress} onChange={(e) => setsearch(e.target.value)} />
                            <ChipInput style={{margin: "10px 0"}} value={tags} onAdd={handleAdd} onDelete={handleDelete} label="Search Tags" variant="outlined" />
                            <Button onClick={searchPost} className={classes.searchButton} variant="contained" color="primary">Search Posts</Button>
                        </AppBar>

                        <Form currentId={currentId} setCurrentId={setCurrentId}/>

                        <Paper elevation={6}>
                            <Paging page={page}/>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
};

export default Home;
