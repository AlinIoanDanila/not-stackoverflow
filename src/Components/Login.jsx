import React, { useState } from "react";
import "../style/login.css";
import axios from "axios";
import { Redirect } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({});
  const [redirect, setRedirect] = useState(false);
  const [style, setStyle] = useState("loginForm");
  const url = "http://localhost:3001";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(user);
      await axios.post(`${url}/users`, { name: user.name });
      localStorage.setItem("user", user.name);
      setRedirect(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUser({ ...user, [id]: value });
  };

  if (redirect) {
    return <Redirect to="/home" />;
  }

  return (
    <div className={style}>
      <form onSubmit={handleSubmit} noValidate autoComplete="off">
        <h1>Login</h1>
        <input onChange={handleChange} type="text" id="name" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
