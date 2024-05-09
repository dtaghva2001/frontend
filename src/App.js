import React from "react";
import SignUpAndLogin from "./page/login/SignUpAndLogin";
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ModelGenerator from "./page/model_generator/ModelGenerator";
import LoadingPage from "./page/model_generator/LoadingPage";
import DownloadPage from "./page/model_generator/DownloadPage";
import {UserHome} from "./page/user_home/UserHome";
import {HomePage} from "./page/home_page/HomePage";
//
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/sign-up"  element={<SignUpAndLogin stateName={'sign-up'} />}/>
                <Route path="/login"  element={<SignUpAndLogin stateName={'login'}/>}/>
                <Route path='/home' element={<UserHome/>}/>
                <Route path="/model_generator" element={<ModelGenerator/>}/>
                <Route path="/loading" element={<LoadingPage />} />
                <Route path="/download" element={<DownloadPage />} />
                <Route path="/" element={<HomePage/>}/>
            </Routes>
        </BrowserRouter>
                    )
}
export default App;