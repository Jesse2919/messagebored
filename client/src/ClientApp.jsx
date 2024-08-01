import React, { useState, useEffect } from "react";
import MessageList from "./components/MessageList";
import MessageForm from "./components/MessageForm";
import { saveMessage, getMessages, deleteMessage } from "./messageStorage";
import "./styles/App.css";
// import React, { useState } from 'react';
// import MessageList from './components/MessageList';
// import MessageForm from './components/MessageForm';
// import './styles/App.css';

const ClientApp = () => {
 const [messages, setMessages] = useState([]);

 useEffect(() => {
  const storedMessages = getMessages();
  setMessages(storedMessages);
 }, []);
 // const ClientApp = () => {
 //     const [messages, setMessages] = useState([]);

 const addMessage = (message) => {
  const newMessage = { ...message, id: Date.now() };
  const newMessages = [...messages, newMessage];
  setMessages(newMessages);
  saveMessage(newMessage);
 };

 const removeMessage = (id) => {
  const newMessages = messages.filter((message) => message.id !== id);
  setMessages(newMessages);
  deleteMessage(id);
 };

 return (
  <div>
   <div className="container">
    <h1>Welcome to the Message Board</h1>
   </div>
   <MessageForm addMessage={addMessage} />
   <MessageList messages={messages} removeMessage={removeMessage} />
  </div>
 );
};
//     return (
//         <div className="app">
//             <h1>Message Board</h1>
//             <MessageForm addMessage={addMessage} />
//             <MessageList messages={messages} />
//         </div>
//     );
// };

// export default ClientApp;

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login.jsx";
import Signup from "./pages/Login/SignUp.jsx";
import Home from "./pages/Home/Home";

function ClientApp() {
 return (
  <div className="p-4 h-screen flex justify-center">
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<Login />} />
   </Routes>
  </div>
 );
}

export default ClientApp;
