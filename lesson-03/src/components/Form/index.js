import React from "react";
import { useState, useRef } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function Form({ setMessageList }) {
    const [inputTextMessage, setInputTextMessage] = useState('');
    const inputRef = useRef(null);

    const getInputTextMessage = (event) => {
        setInputTextMessage(event.target.value);
    }

    const sendMessage = (event) => {
        event.preventDefault();
        setMessageList(messageList => [...messageList, { text: inputTextMessage, author: 'HUMAN', id: `mess-${Date.now()}` }]);
        setInputTextMessage("");
        inputRef.current.focus();
    }

    return (
        <form className="form-wrap" action="/" onSubmit={sendMessage}>
            <TextField
                autoFocus={true}
                inputRef={inputRef}
                type="text"
                value={inputTextMessage}
                onChange={getInputTextMessage}
                label="Your message here"
                margin={"normal"}
                fullWidth={true}
            />
            <br/>
            <Button type="submit" variant="contained" color="primary">
                Send message
            </Button>
        </form>
    );
}