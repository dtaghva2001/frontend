import {AppBar, Button, Grid, Paper, Toolbar, Typography} from "@mui/material";
import {MyNavBar} from "../../components/MyNavBar";
import './HomePage.css'
import {Grid3x3} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
const Post = (props) => {
    const navigate = useNavigate()
    function navigateToBlogDetails() {
        navigate('/blog_details', {
            state: {
                title: props.title,
                description: props.details
            }
        })
    }

    return(
        <Grid item xs={6}>
            <Typography onClick={navigateToBlogDetails}>{props.title}</Typography>
        </Grid>
    )
}
export const HomePage = () => {
    const [posts, setPosts] = useState([])
    return(
        <>
            <MyNavBar name={'Welcome'}/>
            <Grid container spacing={2}>
               <Post title='Intro' details='how to use this app ? \n just navigate it'/>
            </Grid>
            <Button
                variant="contained"
                color="primary"
                className="button-right-down"
            >
                Add blog post
            </Button>
        </>

    )
}
