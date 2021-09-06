import React from "react";
import { useState } from 'react';

export default function Form({ setMessageList }) {
    const [inputTextMessage, setInputTextMessage] = useState('');

    const getInputTextMessage = (event) => {
        setInputTextMessage(event.target.value);
    }

    const sendMessage = (event) => {
        event.preventDefault();
        setMessageList(messageList => [...messageList, { text: inputTextMessage, author: 'HUMAN' }])
    }

    return (
        <form action="/" onSubmit={sendMessage}>
            <input className="form-input" type="text" placeholder="Your message" value={inputTextMessage} onChange={getInputTextMessage} />
            <br />
            <button className="form-button">Send message</button>
        </form>
    );
}