import React from 'react';
import './App.css';
import { Button } from 'antd'

function App() {

  return (
    <div className="frontend">
    <div className="homeContainer">
      <div>
        <h1>Welcome</h1>
        <Button id="loginBt" type="primary"><a href="/login">Login</a></Button>
        <Button id="signupBt" type="primary"><a href="/signup">Signup</a></Button>
      </div>
    </div>
  </div >
  );
}

export default App;
