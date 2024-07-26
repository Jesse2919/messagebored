import React, { useState } from 'react';
import MessageList from './components/MessageList';
import MessageForm from './components/MessageForm';
import './styles/App.css';

const ClientApp = () => {
    const [messages, setMessages] = useState([]);

    const addMessage = (message) => {
        setMessages([...messages, { ...message, id: messages.length }]);
    };

    return (
        <div className="app">
            <h1>Message Board</h1>
            <MessageForm addMessage={addMessage} />
            <MessageList messages={messages} />
        </div>
    );
};

export default ClientApp;
