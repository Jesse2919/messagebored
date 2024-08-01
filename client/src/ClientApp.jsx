// import React, { useState } from 'react';
// import MessageList from './components/MessageList';
// import MessageForm from './components/MessageForm';
// import './styles/App.css';

// const ClientApp = () => {
//     const [messages, setMessages] = useState([]);

//     const addMessage = (message) => {
//         setMessages([...messages, { ...message, id: messages.length }]);
//     };

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
