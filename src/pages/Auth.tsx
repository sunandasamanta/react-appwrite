import Login from "../components/Login";
import Signup from "../components/Signup";
import { useState } from "react";

const Auth = () => {
  const [tab, setTab] = useState<string>("login");
  return (
    <div>
      <h1>Auth</h1>
      <p>Authenticate yourself to continue!</p>
      <div className="bg-sky-200 w-96 mx-auto rounded m-4 p-4">
        <div className="">
          <button
            onClick={() => setTab("login")}
            className={` w-1/2 py-1 rounded ${
              tab === "login" ? "bg-sky-400" : ""
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setTab("signup")}
            className={` w-1/2 py-1 rounded ${
              tab === "signup" ? "bg-sky-400" : ""
            }`}
          >
            Signup
          </button>
        </div>
        {tab === "login" ? <Login /> : <Signup />}
      </div>
    </div>
  );
};

export default Auth;
