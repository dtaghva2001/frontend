import {Button, Paper, Typography} from "@mui/material";
import {useLocation, useNavigate} from "react-router-dom";

export const BlogDetails = (props) => {

    const location = useLocation()
    const { title, description } = location.state || {};
    const navigate = useNavigate()
    function navigateHome(){
        navigate('/')
    }
    return(
        <>
            <Typography>{title}</Typography>
            <Typography>{description}</Typography>
            <Button onClick={navigateHome}>Home</Button>
        </>
    )
}