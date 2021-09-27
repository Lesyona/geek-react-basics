import React from "react";

export default function Message(message) {
    return <>
        <div className="message">
            <div className="message__author">Author: {message.author}</div>
            <div className="message__text">Text: {message.text}</div>
        </div>
    </>;
}