import React from "react";
import { useState, useRef } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default function ChatList({ chats }) {
    return (
        <List>
            {chats.map(item => (
                <ListItem>
                    <ListItemText
                        primary={item.name}
                    />
                </ListItem>
            ))}
        </List>
    );
}