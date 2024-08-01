import React from "react";
import ReactDOM from "react-dom/client";
import ClientApp from "./ClientApp.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext.jsx";

// import { createRoot } from "react-dom/client/client";

// const container = document.getElementById("root");
// const root = createRoot(container);

// root.render(
//  <React.StrictMode>
//   <ClientApp />
//  </React.StrictMode>
// );
ReactDOM.createRoot(document.getElementById("root")).render(
 <React.StrictMode>
  <BrowserRouter>
   <AuthContextProvider>
    <ClientApp />
   </AuthContextProvider>
  </BrowserRouter>
 </React.StrictMode>
);
