import React, { useState } from "react";
import Todo from "./components/Todo.js";
import './App.css'

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const onSubmit = (e) => {
    e.preventDefault()
    if(!username || !password) return
    const payload = {
      username: username,
      password: password
    };
    console.log("object", payload)

    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({

        username: 'kminchelle',
        password: '0lelplR',
        expiresInMins: 30,
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log("object", data.token)
        localStorage.setItem("stringify", JSON.stringify(data));
        localStorage.setItem("Mytoken", data.token)
        localStorage.setItem("authenticated", true);
        window.location.reload();
      }).catch((e) => {
        console.log("error", e)
      })
      alert("Login Success")
  }

  const loggedIn = localStorage.getItem("authenticated")

  return (
    <>
      {loggedIn ?
        <Todo /> :
        <div className="body">
          <h2>Login Page</h2>

          <div className="login" >
            <form id="login">
              <div>
                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                <br />
                <input
                  type="username"
                  id="input"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className="pass">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <br />
                <input
                  type="password"
                  id="input"
                  required
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} />
              </div>
              <button
                type="submit"
                id="log"
                onClick={onSubmit}>Submit</button>
            </form>
          </div>

        </div>
      }
    </>
  );
};
export default Login;