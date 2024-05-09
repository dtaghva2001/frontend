import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LoadingPage = () => {
    const navigate = useNavigate();
    const [isFileReady, setFileReady] = useState(false);

    useEffect(() => {
        const checkFileStatus = async () => {
            try {
                // Example: Polling every 5 seconds
                const interval = setInterval(async () => {
                    const response = await fetch('/api/check-file-status');
                    const data = await response.json();
                    if (data.status === 'ready') {
                        clearInterval(interval);
                        setFileReady(true);
                        navigate('/download'); // Navigate to a download page or handle the file
                    }
                }, 5000);
            } catch (error) {
                console.error('Error checking file status:', error);
            }
        };

        checkFileStatus();
    }, [navigate]);

    return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh" flexDirection="column" bgcolor={'gray'}>
            <CircularProgress size={80} color={'success'}/>
            <Typography variant="h6" sx={{ mt: 2 }}>
                Preparing your file...
            </Typography>
        </Box>
    );
};

export default LoadingPage;
