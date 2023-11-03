import React, {useCallback} from 'react';
import axios from "axios";
import {IPost} from "./types";
import PostsItem from "./PostsItem";
import {Stack} from "@mui/material";
import Button from "@mui/material/Button";
import AddPost from "./AddPost";

export const baseURL = "https://jsonplaceholder.typicode.com/";
const Posts = () => {
    const [posts, setPosts] = React.useState<IPost[] | null>(null);
    const [open, setOpen] = React.useState(false);
    React.useEffect(() => {
        axios.get(`${baseURL}posts?page=1`).then((response) => {
            setPosts(response.data);
        });
    }, []);


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    if (!posts) return null;
    return (
        <>
            <Button sx={{justifySelf: 'flex-start'}} variant={'contained'} onClick={handleClickOpen}>Add Post</Button>
            <Stack spacing={{xs: 1, sm: 2}} direction="row" useFlexGap flexWrap="wrap" justifyContent={'center'}>
                {posts.slice(0, 10).map(post => <PostsItem {...post}/>)}
            </Stack>
            <AddPost open={open} handleClose={handleClose}/>
        </>
    );
};

export default Posts;