import React from "react";
import SignUpAndLogin from "./page/login/SignUpAndLogin";
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ModelGenerator from "./page/model_generator/ModelGenerator";
import DownloadPage from "./page/model_generator/DownloadPage";
import {UserHome} from "./page/user_home/UserHome";
import {HomePage} from "./page/home_page/HomePage";
import {BlogDetails} from "./page/home_page/BlogDetails";
import {ChatGPTGetResponse} from "./page/chatgpt_response/ChatGPTGetResponse";
//
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login"  element={<SignUpAndLogin/>}/>
                <Route path='/' element={<UserHome/>}/>
                <Route path="/model_generator" element={<ModelGenerator/>}/>
                <Route path="/download" element={<DownloadPage />} />
                <Route path="/get_response" element={<ChatGPTGetResponse />}></Route>
                {/*<Route path="/" element={<HomePage/>}/>*/}
                {/*<Route path="/blog_details" element={<BlogDetails/>}/>*/}
            </Routes>
        </BrowserRouter>
                    )
}
export default App;