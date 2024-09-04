import React from "react";
import './App.css'
import Login from "./components/Login";
import Form from "./components/Form";


var userIsRegistered = false;

// {isLoggedIn ? <h1>Hello</h1> : <Login />}

function App() {
  return (
    <div className="container">
      {userIsRegistered ? <Login /> : <Form />}
    </div>
  );
}

export default App;
