import logo from "../../assets/message.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import useSignup from "../../hooks/useSignup.js";

const SignUp = () => {
 const [inputs, setInputs] = useState({
  username: "",
  email: "",
  password: "",
 });
 const { signup } = useSignup();

 const handleSubmit = async (e) => {
  e.preventDefault();
  await signup(inputs);
 };

 return (
  <main className="flex h-screen w-full">
   <section className="mx-auto flex flex-col justify-center px-4 xl:w-[40%] xl:px-20 2xl:px-[112px]">
    <div className="space-y-6 rounded-lg border-[1px] px-6 py-7 sm:p-12 xl:border-[0px] xl:p-0">
     <header className="mb-14 flex items-center gap-3">
      <img src={logo} alt="logo" className="h-16 w-16" />
      <h1 className="text-3xl font-extrabold">Message Board</h1>{" "}
     </header>
     <h2 className="text-3xl font-bold">Sign Up</h2>
     <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
      <label className="form_label">
       <span className="text-sm font-bold">Username</span>
       <input
        type="text"
        placeholder="Enter a username"
        className="auth_input"
        value={inputs.username}
        onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
       />
      </label>
      <label className="form_label">
       <span className="text-sm font-bold">Email</span>
       <input
        type="email"
        placeholder="Enter your email"
        className="auth_input"
        value={inputs.email}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
       />
      </label>
      <label className="form_label">
       <span className="text-sm font-bold">Password</span>
       <input
        type="password"
        placeholder="Enter your password"
        className="auth_input"
        value={inputs.password}
        onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
       />
      </label>

      <button className="flex w-full items-center justify-center rounded-md bg-blue-500 py-2.5 text-white">
       Sign Up
      </button>
      <Link to="/login" className="cursor-pointer font-bold text-blue-600">
       Already have an account?
      </Link>
     </form>
    </div>
   </section>
   <section className="hidden w-[60%] xl:block">
    <img src="/bg.png" alt="image dashboard" className="h-full w-full"></img>
   </section>
  </main>
 );
};

export default SignUp;
