// import "../../styles/messageboard.css";
import React, { useState, useEffect } from "react";
import MessageList from "../../components/MessageList.jsx";
import MessageForm from "../../components/MessageForm.jsx";
import {
 saveMessage,
 getMessages,
 deleteMessage,
} from "../../messageStorage.js";

const Home = () => {
 const [messages, setMessages] = useState([]);

 useEffect(() => {
  const storedMessages = getMessages();
  setMessages(storedMessages);
 }, []);

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

export default Home;
