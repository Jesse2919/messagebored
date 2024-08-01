// import MessageItem from "../../components/MessageItem.jsx";
import MessageList from "../../components/MessageList.jsx";
import MessageForm from "../../components/MessageForm.jsx";
import React, { useState } from "react";
import "../../App.css";

const Home = () => {
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

export default Home;
