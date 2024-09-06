import React from "react";
import './App.css'
import Login from "./components/Login";
import Form from "./components/Form";
import Counter from "./components/Counter";


var userIsRegistered = false;


// {isLoggedIn ? <h1>Hello</h1> : <Login />}

function App() {

  return (
    

    <div className="container">
      <Counter />
      {userIsRegistered ? <Login /> : <Form />}
    </div>
  );
}

export default App;
