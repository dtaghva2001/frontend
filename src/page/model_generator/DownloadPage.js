import React, {useState} from 'react';
import { useLocation } from "react-router-dom";
import {Alert, Button, Container, Grid, TextField} from "@mui/material";
import './DownloadPage.css';
import {urls} from "../../urls/urls";

const DownloadPage = () => {
    const location = useLocation();
    //this line of code means 3 things
    //if location.state.status exists then use it
    //otherwise set the status to 1
    const status = location.state ? location.state.status : 1;
    const [code, setCode] = useState("1")
    const url = urls.download
    function changeCode(e) {
        setCode(e.target.value)

    }
    async function downloadCode(e) {
        e.preventDefault()
        const url1 = urls.download;
        try{
            console.log('status: ' + status)
            const response = await fetch(url1, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify({"statusCode": status})
            });
            let blob = await response.blob();
            const downloadUrl = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = downloadUrl;
            link.download = `${status}.js`;
            document.body.appendChild(link);
            link.click();
            link.remove();
            window.URL.revokeObjectURL(downloadUrl);

        }catch (e) {
            console.log('error')
        }
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
                        onClick={downloadCode}
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
