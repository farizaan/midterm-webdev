import React, {useCallback, useState} from 'react';
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import axios from "axios";
import {baseURL} from "./Posts";

interface AddPostProps {
    open: boolean;
    handleClose: () => void
}

const AddPost = (props: AddPostProps) => {
    const {open, handleClose} = props;
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const onClose = () => {
        handleClose();
        setTitle('');
        setBody('');
    }
    const addPost = useCallback(() => {
        axios.post(`${baseURL}/posts`, {title, body, userId: 1}).then((response) => {
            // navigate('/')
            alert('Post added!');
            onClose()
        });
    }, [title, body])

    return (
        <Dialog onClose={onClose} open={open} sx={{width: '100%'}}>
            <DialogTitle>Add post</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    To add post type:
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    id="name"
                    label="Title"
                    type="text"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    id="outlined-multiline-flexible"
                    label="Body"
                    value={body}
                    onChange={(event) => setBody(event.target.value)}
                    multiline
                    fullWidth
                    variant="standard"
                    maxRows={4}
                />
            </DialogContent>
            <DialogActions>
                <Button color={'error'} onClick={handleClose}>Cancel</Button>
                <Button onClick={addPost}>Add</Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddPost;