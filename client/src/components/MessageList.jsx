import React from 'react';
import MessageItem from './MessageItem';
import '../styles/MessageList.css';
import '../styles/App.css';

const MessageList = ({ messages, removeMessage }) => (
    <div>
        {messages.map((message) => (
            <MessageItem key={message.id} message={message} removeMessage={removeMessage} />
        ))}
    </div>
);

export default MessageList;


