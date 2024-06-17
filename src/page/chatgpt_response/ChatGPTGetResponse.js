import {Button, TextField} from "@mui/material";
import { useState } from "react";
import {urls} from "../../urls/urls";

export const ChatGPTGetResponse = () => {

    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');

    function handleChange(e) {
        setPrompt(e.target.value);
        console.log(e.target.value)
    }

    function handleChangeRes(e) {
        // setResponse(e.target.value)
        console.log(e.target.value)
    }

    async function handleSubmit(e) {
        e.preventDefault()
        const url = urls.chatGPTresponse
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(prompt)
        });
        console.log(response)
    }

    return (
        <div>
            <label htmlFor="askedResponse">Your Question:</label>
            <TextField
                label="askedResponse"
                name="resp"
                value={prompt}
                onChange={handleChange}
                required
                fullWidth
            />
            <Button onClick={handleSubmit}
            fullWidth>
                submit
            </Button>
            <TextField
                label="Generated response"
                name="resp"
                value={response}
                onChange={handleChangeRes}
                required
                fullWidth
            />

        </div>
    );
}
