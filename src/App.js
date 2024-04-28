import React from "react";
import SignUp from "./SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState} from "react";
import {Button, Container, Grid, TextField, Typography} from "@mui/material";
import Login from "./Login";
import ModelGenerator from "./ModelGenerator";
//xs = {12}
//sm = {6}
//
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/sign-up" element={<SignUp />}/>
                {/*    todo later */}
                <Route path="/login" element={<Login />}/>
                {/*todo what am i doin??*/}
                <Route path="/" element={<ModelGenerator/>}/>

            </Routes>
        </BrowserRouter>
                    )
}
export default App;