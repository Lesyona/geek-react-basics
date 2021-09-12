import React from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default function ChatList({ chats }) {
    return (
        <List>
            {chats.map(chat => (
                <ListItem key={chat.id}>
                    <ListItemText
                        primary={chat.name}
                    />
                </ListItem>
            ))}
        </List>
    );
}