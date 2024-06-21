import React, {useEffect, useState} from "react";
// import  {useState} from "@types/react";
// import {useState} from "react";
import {useLocation, useNavigate} from 'react-router-dom';
import {Button, Container, Grid, TextField, Typography} from "@mui/material";
import {MyNavBar} from "../../components/MyNavBar";
import {urls} from "../../urls/urls";
import './SignUpAndLogin.css'
const SignUpAndLogin = () => {
    const [pageState, setPageState] = useState('login')
    const navigate = useNavigate()
    const location = useLocation()
    const isInfoWrong = useState(true)
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
        e.preventDefault();
        const url = pageState === 'login' ? urls.login : urls.signUp;
        console.log(url);

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data.result)
                console.log('success:', data);
                navigate('/model_generator')

            } else {
                const errorData = await response.json();
                console.log("error:" + errorData)

            }
        } catch (error) {
            console.error('error:', error);
        }
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
        <div id={"div-with-background"}>
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
                                    {
                                        // isInfoWrong ? (pageState === 'sign-up' ? <label>username or email already exists!</label> : <label>login failed</label>) : <label>.</label>
                                    }
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
            </Container>
        </div>

    );
}
export default SignUpAndLogin;