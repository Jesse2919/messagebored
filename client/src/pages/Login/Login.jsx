import { Link } from "react-router-dom";
import logo from "../../assets/message.png";

const Login = () => {
 return (
  <main className="flex h-screen w-full">
   <section className="mx-auto flex flex-col justify-center px-4 xl:w-[40%] xl:px-20 2xl:px-[112px]">
    <div className="space-y-6 rounded-lg border-[1px] px-6 py-7 sm:p-12 xl:border-[0px] xl:p-0">
     <header className="mb-14 flex items-center gap-3">
      <img src={logo} alt="logo" className="h-16 w-16" />
      <h1 className="text-3xl font-extrabold">Message Board</h1>{" "}
     </header>
     <h2 className="text-3xl font-bold sm:text-5xl">Welcome Back!</h2>

     <form className="flex flex-col space-y-5">
      <label className="form_label">
       <span className="text-sm font-bold">Email</span>
       <input
        type="email"
        placeholder="Enter your email"
        className="auth_input "
       />
      </label>
      <label className="form_label">
       <span className="text-sm font-bold">Password</span>
       <input
        type="password"
        placeholder="Enter your password"
        className="auth_input"
       />
      </label>
      <button className="flex w-full items-center justify-center rounded-md bg-blue-500 py-2.5 text-white">
       Login
      </button>
      <Link to="/signup" className="cursor-pointer font-bold text-blue-600">
       Don&apos;t have an account?
      </Link>
     </form>
    </div>
   </section>
   <section className="hidden w-[60%] xl:block">
    <img
     src="/layout.png"
     alt="image dashboard"
     className="h-full w-full"
    ></img>
   </section>
  </main>
 );
};

export default Login;
