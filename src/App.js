import React from "react";
import SignUp from "./SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState} from "react";
import {Button, Container, Grid, TextField, Typography} from "@mui/material";
//xs = {12}
//sm = {6}
//
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignUp />}/>
            </Routes>
        </BrowserRouter>
                    )
}
export default App;