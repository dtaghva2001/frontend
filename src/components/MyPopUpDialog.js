import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';

function MyPopUpDialog() {
    const [open, setOpen] = useState(false);  // State to manage open/close of the dialog
    const [input, setInput] = useState('');  // State to hold the input data

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleInput = (event) => {
        setInput(event.target.value);
    };

    const handleSubmit = () => {
        console.log('User Input:', input);  // Log input or handle it as needed
        handleClose();  // Close the dialog after submitting
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Open Popup
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Enter Information</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please enter the information you want to submit.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Your Input"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={input}
                        onChange={handleInput}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>Submit</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default MyPopUpDialog;
