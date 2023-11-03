import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import NavigationBar from "./pages/NavigationBar";
import Posts from "./pages/Posts";
import PostItem from "./pages/PostItem";
import Profile from "./pages/Profile";
import Container from "@mui/material/Container";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <NavigationBar/>
                <Container fixed sx={{py: 5}}>
                    <Routes>
                        <Route path="/" element={<Posts/>}/>
                        <Route path="/posts/:id" element={<PostItem/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                    </Routes>
                </Container>
            </div>
        </BrowserRouter>
    );
}

export default App;
