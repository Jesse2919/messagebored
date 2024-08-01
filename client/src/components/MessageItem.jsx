import React from 'react';
import '../styles/MessageItem.css'; // Import the CSS file
import '../styles/App.css';

const MessageItem = ({ message, removeMessage }) => (
    <div>
        <h4>{message.author}</h4>
        <p>{message.content}</p>
        <button onClick={() => removeMessage(message.id)}>Remove</button>
    </div>
);

export default MessageItem;
