const MESSAGES_KEY = 'messages';

export const saveMessage = (message) => {
    const messages = getMessages();
    messages.push(message);
    localStorage.setItem(MESSAGES_KEY, JSON.stringify(messages));
};

export const getMessages = () => {
    const messages = localStorage.getItem(MESSAGES_KEY);
    return messages ? JSON.parse(messages) : [];
};

export const deleteMessage = (id) => {
    const messages = getMessages();
    const filteredMessages = messages.filter(message => message.id !== id);
    localStorage.setItem(MESSAGES_KEY, JSON.stringify(filteredMessages));
};