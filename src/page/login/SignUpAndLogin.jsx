import React, {useEffect, useState} from "react";
// import  {useState} from "@types/react";
// import {useState} from "react";
import {useLocation, useNavigate} from 'react-router-dom';
import {Button, Container, Grid, TextField, Typography} from "@mui/material";
import {MyNavBar} from "../../components/MyNavBar";


const SignUpAndLogin = () => {

    const linkToLoginPage = "/login"; //todo
    const linkToRegisterPage = "/sign-up"; //todo
    const [pageState, setPageState] = useState('login')
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        if(location.state && location.state.status){
            console.log('page state changed')
            setPageState(location.state.status)
        }

    },[location.state])

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        //todo this varies when for the login or register.
        //honestly, that's just the url.
        //we dont just implement it. we wait.
        alert('navigating to the model generator')
        navigate('/model_generator')
        // e.preventDefault();
        // const url = "http://localhost:1234/signUp?formData=" + JSON.stringify(formData) //todo fixing this to be the right backend URL
        // const res1 = await fetch(url, {
        //     method: "POST",
        // })
        // await alert(res1)
        // console.log('Form submitted:', formData);
    };

    function changeStateAndNavigateTo(myStatus)
    {
        navigate('/login', {
            state: {
                status: myStatus
            }
        })
    }

    return (
        <>
            <MyNavBar/>
            <Container maxWidth="xs">

                <Grid container spacing={2} justifyContent="center" alignItems="center" direction="column" style={{ minHeight: '100vh' }}>
                    <Grid item>
                        <Typography variant="h4" component="h1">
                            {pageState}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Username"
                                        name="username"
                                        value={formData.username}
                                        onChange={handleChange}
                                        fullWidth
                                        required
                                    />

                                </Grid>
                                {
                                    pageState === "sign-up" &&
                                    <Grid item xs={12}>
                                        <TextField
                                            label="Email"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            fullWidth
                                            required
                                        />
                                    </Grid>

                                }

                                <Grid item xs={12}>
                                    <TextField
                                        label="Password"
                                        name="password"
                                        type="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        fullWidth
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button type="submit" variant="contained" color="primary" fullWidth>
                                        {
                                            pageState === 'login' ? 'login' : 'sign up'
                                        }

                                    </Button>
                                </Grid>
                                <Grid item xs={12}>
                                    {
                                        pageState === 'sign-up' ? <label>if you have already registered click <b className='text-blue-500' onClick={() => changeStateAndNavigateTo("login")} >
                                            here</b></label> : <label>don't have an account? click <b className='text-blue-500' onClick={() => changeStateAndNavigateTo("sign-up")} >
                                            here</b></label>
                                    }

                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
            </Container>
        </>

    );
}
export default SignUpAndLogin;