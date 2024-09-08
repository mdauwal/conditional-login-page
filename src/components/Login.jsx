import React from "react";
import Inputs from "./Inputs";

const Login = () => {
  return (
    <div>
      <form className="form">
        <Inputs name="text" placeholder="Username" />
        <Inputs name="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
