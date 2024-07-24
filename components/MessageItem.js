import React from 'react';

const MessageItem = ({ message }) => (
    <div className="message-item">
        <h4>{message.author}</h4>
        <p>{message.content}</p>
    </div>
);

export default MessageItem;