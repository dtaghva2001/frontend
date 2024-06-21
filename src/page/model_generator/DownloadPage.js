import React, {useState} from 'react';
import { useLocation } from "react-router-dom";
import { Button, Container, Grid, TextField } from "@mui/material";
import './DownloadPage.css';
import {urls} from "../../urls/urls";

const DownloadPage = () => {
    const location = useLocation();
    const { status } = location.state || {};
    const [code, setCode] = useState("")
    const url = urls.get_response
    function changeCode(e) {
        setCode(e.target.value)

    }

    return (
        <Container className="full-height">
            <Grid container direction="column" className="full-height">
                <Grid item className="grow">
                    <TextField
                        label="text box"
                        multiline
                        value={code}
                        onChange={changeCode}
                        rows={4}
                        variant="outlined"
                        fullWidth
                        style={{ height: '100%' }}
                    />
                </Grid>
                <Grid item className="button-container">
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={async () => {
                            const response = await fetch(url, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify(status)
                            });
                            //downloaded the file.
                        }}
                    >
                        Download
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={async () => {
                            const response = await fetch(url, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify(status)
                            });
                            const json_res = await response.json()
                            setCode(json_res)
                        }}

                    >
                        Show Code
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default DownloadPage;
