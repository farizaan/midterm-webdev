import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {IPost} from "./types";
import {useNavigate} from "react-router-dom";
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import {useCallback, useEffect, useState} from "react";

const bull = (
    <Box
        component="span"
        sx={{display: 'inline-block', mx: '2px', transform: 'scale(0.8)'}}
    >
        •
    </Box>
);


const PostsItem: React.FC<IPost> = (post) => {
    const {title, body, id, liked} = post;
    const [like, setLike] = useState<boolean>(false)
    useEffect(() => {
        setLike(!!liked)
    }, []);
    const navigate = useNavigate()
    const handleLikeClick = useCallback(() => {
        setLike(prevState => !prevState)
    }, [])
    return (
        <Card sx={{minWidth: 275, width: 300}}>
            <CardContent>
                <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="h5" component="div">
                    {body}
                </Typography>

            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => navigate(`/posts/${id}`)}>See More</Button>
                <Button onClick={handleLikeClick}> {!like ? <ThumbUpAltOutlinedIcon/> : <ThumbUpAltIcon/>}</Button>
            </CardActions>
        </Card>
    );
}
export default PostsItem