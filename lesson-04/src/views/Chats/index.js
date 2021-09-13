import {useCallback, useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Message from '../../components/Message';
import Form from '../../components/Form';
import ChatList from '../../components/ChatList';
import '../../App.css';

const initialMessages = {
    'chat-1': [
        { text: "message from chat1", author: "HUMAN", id: "mess-1" },
        { text: "message from chat1 chat1", author: "HUMAN", id: "mess-2" },
    ],
    'chat-2': [
        { text: "message from chat2", author: "HUMAN", id: "mess-1" },
        { text: "message from chat2 chat2", author: "HUMAN", id: "mess-2" },
    ],
}

const initialChats = [
    { name: 'Chat 1', id: 'chat-1' },
    { name: 'Chat 2', id: 'chat-2' },
];

export default function Chats() {
    const { chatId } = useParams();

    const [messageList, setMessageList] = useState(initialMessages);
    const [chats, setChats] = useState(initialChats);

    const sendMessage = useCallback((message) => {
        setMessageList(messageList => ({
            ...messageList,
            [chatId]: [
                ...messageList[chatId],
                message
            ]
        }), [chatId]);
    }, [chatId]);

    useEffect(() => {
        let timeout;

        if (!!chatId && messageList[chatId]?.[messageList[chatId]?.length - 1]?.author === 'HUMAN') {
            timeout = setTimeout(() => {
                sendMessage({
                    text: 'I am bot',
                    author: 'BOT',
                    id: `mess-${Date.now()}`
                });
            }, 1500)
        }

        return () => clearTimeout(timeout);
    }, [messageList[chatId]]);

    const handleAddMessage = useCallback(
        (text) => {
            sendMessage({
                text: text,
                author: 'HUMAN',
                id: `mess-${Date.now()}`
            });
        }, [chatId, sendMessage]
    );

    const handleAddChat = useCallback(
        () => {
            const id = Date.now();
            setChats(prevChats => ([
                ...prevChats,
                {
                    name: `Chat ${id}`,
                    id: `chat-${id}`
                }
            ]));

            setMessageList(messageList => ({
                ...messageList,
                [`chat-${id}`]: []
            }));
        }, [chats, messageList]
    );

    return (
        <div className="App">
            {!!chatId && (
                <>
                    <Form formOnSubmit={handleAddMessage} />
                </>
            )}

            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <ChatList chats={chats}/>
                    <Button variant="contained" color="primary" onClick={handleAddChat}>Add New Chat</Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    {!!chatId && messageList[chatId].map((message, index) => (
                        <Message key={message.id} text={message.text} author={message.author} />
                    ))}
                </Grid>
            </Grid>
        </div>
    );
}