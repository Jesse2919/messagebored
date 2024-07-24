import React, { useState } from 'react';

const MessageForm = ({ addMessage }) => {
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (author && content) {
            addMessage({ author, content });
            setAuthor('');
            setContent('');
        }
    };

    return (
        <form className="message-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
            />
            <input
                type="text"
                placeholder="Message"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button type="submit">Send</button>
        </form>
    );
};

export default MessageForm;