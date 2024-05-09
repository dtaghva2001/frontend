import {AppBar, Button, Toolbar, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
export const MyNavBar = (props) => {
    const navigate = useNavigate()
    function navigateTo(link, stn){
        let isLoginOrRegister = stn !== ''
        alert(isLoginOrRegister)
        if(isLoginOrRegister){
            alert(stn)
            navigate(link, {
                stateName:stn
            })
        }
        else{
            navigate('/')
        }

    }
    return(
        <AppBar position="static" sx={{width:'100%'}}>
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    {props.name}
                </Typography>
                <Button color="inherit" onClick={() => navigateTo('/login', 'login')}>Login</Button>
                <Button color="inherit" onClick={() => navigateTo('/sign-up', 'sign-up')}>Sign Up</Button>
                <Button color="inherit" onClick={() => navigateTo('/', '')}><HomeIcon/></Button>
            </Toolbar>
        </AppBar>
    );
}