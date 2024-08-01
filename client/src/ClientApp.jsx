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
