import React, {useState} from "react";
// import  {useState} from "@types/react";
// import {useState} from "react";
import {Button, Container, Grid, TextField, Typography} from "@mui/material";

const SignUp = () => {
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
        const url = "http://localhost:1234/signUp?formData=" + JSON.stringify(formData) //todo fixing this to be the right backend URL
        const res1 = await fetch(url, {
            method: "POST",
        })
        await alert(res1)
        console.log('Form submitted:', formData);
    };

    return (
        <Container maxWidth="xs">
            <Grid container spacing={2} justifyContent="center" alignItems="center" direction="column" style={{ minHeight: '100vh' }}>
                <Grid item>
                    <Typography variant="h4" component="h1">
                        Sign Up
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
                                    Sign Up
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </Container>
    );
}
export default SignUp;