import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="center">
      {/* <h1>Login</h1> */}
      <form className="flex flex-col justify-center items-center">
        <div className="p-4 w-full">
          <label className="text-sky-500" htmlFor="username">
            Username or Email :
          </label>{" "}
          <br />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-sky-300 rounded-md px-3 p-2 w-full outline-none focus:border-sky-500"
            type="text"
            placeholder="Enter your username or email"
            id="username"
          />
        </div>
        <div className="p-4 w-full">
          <label className="text-sky-500" htmlFor="password">
            Password :
          </label>
          <br />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-sky-300 rounded-md px-3 p-2 w-full outline-none focus:border-sky-500"
            type="password"
            placeholder="Enter your password"
            id="password"
            
          />
        </div>
        <button
          className="mx-auto px-4 py-1 bg-sky-300 hover:bg-sky-400"
          type="submit"
        >
          Login
        </button>
      </form>
      <hr className="my-4 text-sky-400" />
      <p className="text-sky-500 text-center">
        Don't have an account?{" "}
        <Link className="text-sky-800 font-medium underline" to="/auth/signup">
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default Login;
