import React, {useCallback} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {IPost} from "./types";
import axios from "axios";
import {baseURL} from "./Posts";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const PostItem = () => {
    let {id} = useParams();
    const [post, setPost] = React.useState<IPost | null>(null);
    const navigate = useNavigate();
    React.useEffect(() => {
        axios.get(`${baseURL}/posts/${id}`).then((response) => {
            setPost(response.data);
        });
    }, [id]);

    const deletePost = useCallback(() => {
        axios.delete(`${baseURL}/posts/${id}`).then((response) => {
            navigate('/')
            alert('Post deleted!');
        });
    }, [])
    if (!post) return null;
    return (
        <Box sx={{display: 'flex', justifyContent: 'flex-start', flexDirection: 'column'}}>
            <Typography textAlign={'left'} variant={'h5'}>Title: {post.title}</Typography>
            <Typography textAlign={'left'} variant={'h6'}>About: {post.body} </Typography>
            <Button onClick={deletePost} variant={'contained'} color={'warning'}>Delete</Button>
        </Box>
    );
};

export default PostItem;