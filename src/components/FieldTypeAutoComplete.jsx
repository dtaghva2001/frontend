import React, { useState } from 'react';
import { TextField, MenuItem, FormControl, InputLabel, Select, Button, Grid, Typography } from '@mui/material';

const ModelFieldCreator = () => {
    const [field, setField] = useState({
        name: '',
        type: '',
        isRequired: false,
        isUnique: false
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setField({ ...field, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

    };

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Field Name"
                        name="name"
                        value={field.name}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <InputLabel>Type</InputLabel>
                        <Select
                            name="type"
                            value={field.type}
                            label="Type"
                            onChange={handleInputChange}
                        >
                            <MenuItem value="String">String</MenuItem>
                            <MenuItem value="Number">Number</MenuItem>
                            <MenuItem value="Boolean">Boolean</MenuItem>
                            <MenuItem value="Date">Date</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <InputLabel>Required</InputLabel>
                        <Select
                            name="isRequired"
                            value={field.isRequired}
                            label="Required"
                            onChange={handleInputChange}
                        >
                            <MenuItem value={true}>Yes</MenuItem>
                            <MenuItem value={false}>No</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <InputLabel>Unique</InputLabel>
                        <Select
                            name="isUnique"
                            value={field.isUnique}
                            label="Unique"
                            onChange={handleInputChange}
                        >
                            <MenuItem value={true}>Yes</MenuItem>
                            <MenuItem value={false}>No</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </form>
    );
};

export default ModelFieldCreator;
