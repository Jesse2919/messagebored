import React from "react";
import ReactDOM from "react-dom/client";
import ClientApp from "./ClientApp.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
 <React.StrictMode>
  <BrowserRouter>
   <AuthContextProvider>
    <ClientApp />
   </AuthContextProvider>
  </BrowserRouter>
 </React.StrictMode>
);
