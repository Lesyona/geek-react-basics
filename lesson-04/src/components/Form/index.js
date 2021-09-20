import React from "react";
import { useState, useRef } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function Form({ formOnSubmit }) {
    const [inputTextMessage, setInputTextMessage] = useState('');
    const inputRef = useRef(null);

    const getInputTextMessage = (event) => {
        setInputTextMessage(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        formOnSubmit(inputTextMessage);
        setInputTextMessage("");
        inputRef.current.focus();
    }

    return (
        <form className="form-wrap" action="/" onSubmit={handleSubmit}>
            <TextField
                autoFocus
                inputRef={inputRef}
                type="text"
                value={inputTextMessage}
                onChange={getInputTextMessage}
                label="Your message here"
                margin={"normal"}
                fullWidth
            />
            <br/>
            <Button type="submit" variant="contained" color="primary">
                Send message
            </Button>
        </form>
    );
}