import React, {useState} from 'react';
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";

const Profile = () => {
    const [edit, setEdit] = useState(false)
    const [name, setName] = useState('Fariza')
    const [surname, setSurname] = useState('Nussipova')
    const [email, setEmail] = useState('nussipova@gmia.com')
    return (
        <Box>
            <Typography variant={'h4'}> Profile</Typography>
            <Avatar/>
            <Typography>
                Name: {name}
                <TextField
                    disabled = {!edit}
                    autoFocus
                    margin="dense"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    id="name"
                    label="Name"
                    type="text"
                    fullWidth
                    variant="standard"
                />
            </Typography>
            <Typography>
                Surname: {surname}
                <TextField
                    disabled = {!edit}
                    autoFocus
                    margin="dense"
                    value={surname}
                    onChange={(event) => setSurname(event.target.value)}
                    id="name"
                    label="Surname"
                    type="text"
                    fullWidth
                    variant="standard"
                />
            </Typography>
            <Typography>
                Email: {email}
                <TextField
                    disabled = {!edit}
                    autoFocus
                    margin="dense"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    id="name"
                    label="Email"
                    type="email"
                    fullWidth
                    variant="standard"
                />
            </Typography>
            {!edit && <Button onClick={() => setEdit(true)}> Edit</Button>}
            {edit &&
                <Button  onClick={() => setEdit(false)}>Save</Button>}
        </Box>
    );
};

export default Profile;