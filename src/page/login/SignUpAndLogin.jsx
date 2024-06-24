import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import {Button, Container, Grid, TextField, Typography, Paper, Box} from "@mui/material";
import { MyNavBar } from "../../components/MyNavBar";
import { urls } from "../../urls/urls";
import './SignUpAndLogin.css';

const SignUpAndLogin = () => {
    const [pageState, setPageState] = useState('login');
    const navigate = useNavigate();
    const location = useLocation();
    const [isInfoWrong, setIsInfoWrong] = useState(false);

    useEffect(() => {
        if (location.state && location.state.status) {
            setPageState(location.state.status);
        }
    }, [location.state]);

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
                navigate('/model_generator');
            } else {
                setIsInfoWrong(true);
            }
        } catch (error) {
            console.error('Error:', error);
            setIsInfoWrong(true);
        }
    };

    const changeStateAndNavigateTo = (status) => {
        navigate('/login', {
            state: { status }
        });
    };

    return (
        <div className="sign-up-login-container">
            <MyNavBar />
            <Container maxWidth="sm">
                <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
                    <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
                        <Grid container spacing={3} direction="column" alignItems="center">
                            <Grid item>
                                <Typography variant="h4" component="h1">
                                {pageState === 'login' ? 'Login' : 'Sign Up'}
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
                                    {pageState === 'sign-up' && (
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
                                    )}
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
                                            {pageState === 'login' ? 'Login' : 'Sign Up'}
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant="body2">
                                            {pageState === 'sign-up' ? (
                                                <span>
                                                    Already have an account?{' '}
                                                    <b className="text-blue" onClick={() => changeStateAndNavigateTo("login")}>
                                                        Login here
                                                    </b>
                                                </span>
                                            ) : (
                                                <span>
                                                    Don't have an account?{' '}
                                                    <b className="text-blue-500" onClick={() => changeStateAndNavigateTo("sign-up")}>
                                                        Sign Up here
                                                    </b>
                                                </span>
                                            )}
                                        </Typography>
                                    </Grid>
                                    {/*!if information is WRONG And the backend sent an error*/}
                                    {isInfoWrong && (
                                        <Grid item xs={12}>
                                            <Typography color="error">
                                                {pageState === 'sign-up' ? 'Username or email already exists!' : 'Login failed'}
                                            </Typography>
                                        </Grid>
                                    )}
                                    </Grid>
                                </form>
                            </Grid>
                        </Grid>
                    </Paper>
                </Box>
            </Container>
        </div>
    );
};

export default SignUpAndLogin;
