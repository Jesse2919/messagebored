import React, { useState } from 'react';
import '../styles/MessageForm.css';
import '../styles/App.css';

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
        <div className="container">
            <div className="form-header">
                <h2>Message Board</h2>
            </div>
            <form className="message-form" onSubmit={handleSubmit}>
                <label htmlFor="author">Author</label>
                <input
                    type="text"
                    id="author"
                    placeholder="Enter your name"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                <label htmlFor="content">Message</label>
                <textarea
                    id="content"
                    placeholder="Enter your message"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default MessageForm;
