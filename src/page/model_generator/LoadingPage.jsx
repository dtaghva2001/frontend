import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Loading = () => {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh" flexDirection="column" bgcolor={'gray'}>
            <CircularProgress size={80} color={'success'}/>
            <Typography variant="h6" sx={{ mt: 2 }}>
                Preparing file...
            </Typography>
        </Box>
    );
};

export default Loading;
