import React, { useContext, useState } from "react";
import UserContext from '../context/UserContext'

function Login() {
  const { setUser } = useContext(UserContext); // Access global setUser
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username.trim() !== "" && password.trim() !== "") {
      setUser({ username, password });
      // Clear inputs
      setUsername("");
      setPassword("");
    }
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ display: "block", marginBottom: "10px" }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ display: "block", marginBottom: "10px" }}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
