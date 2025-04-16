import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="center">
      <form className="flex flex-col justify-center items-center">
        <div className="p-4 w-full">
          <label 
            className="text-sky-500"
            htmlFor="name">Name</label>
          <br />
          <input 
            className="border border-sky-300 rounded-md px-3 p-2 w-full outline-none focus:border-sky-500"
            type="text" 
            placeholder="Enter your name" 
            id="name" 
          />
        </div>
        <div className="p-4 w-full">
          <label 
            className="text-sky-500"
            htmlFor="email">Email</label>
          <br />
          <input 
            className="border border-sky-300 rounded-md px-3 p-2 w-full outline-none focus:border-sky-500"
            type="email" 
            placeholder="Enter your email" 
            id="email" 
          />
        </div>
        <div className="p-4 w-full">
          <label 
            className="text-sky-500" 
            htmlFor="password">Password</label>
          <br />
          <input 
            className="border border-sky-300 rounded-md px-3 p-2 w-full outline-none focus:border-sky-500"
            type="password" 
            placeholder="Enter password" 
            id="password" 
          />
        </div>
        <button 
          className="mx-auto px-4 py-1 bg-sky-300 hover:bg-sky-400" 
          type="submit">
          Sign Up
        </button>
      </form>
      <hr className="my-4 text-sky-400"/>
      <p className="text-sky-500 text-center">
        Already have an account? <Link className="text-sky-800 font-medium underline" to="/auth/login">Login</Link>
      </p>
    </div>
  );
};

export default Signup;