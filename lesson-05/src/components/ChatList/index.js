import React from "react";
import { Link } from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

export default function ChatList({ chats }) {
    return (
        <List>
            {chats.map(chat => (
                <ListItem key={chat.id}>
                    <Link to={`/chats/${chat.id}`}>{chat.name}</Link>
                </ListItem>
            ))}
        </List>
    );
}