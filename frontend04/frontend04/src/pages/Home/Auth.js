import React, { useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async () => {
    try {
      const response = await fetch("https://localhost:7255/api/Auth/Register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        // User registered successfully
        setError("");
        alert("User registered successfully");
      } else {
        const data = await response.json();
        setError(data);
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Something went wrong");
    }
  };

  const handleLogin = async () => {
    try {
      const response = await fetch(
        `https://localhost:7255/api/Auth/Login?email=${email}&password=${password}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setError("");
      } else {
        const data = await response.json();
        setError(data);
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Something went wrong");
    }
  };

  const handleLogout = async () => {
    try {
      const response = await fetch("https://localhost:7255/api/Auth/Logout");
      if (response.ok) {
        // Logged out successfully
        setError("");
      } else {
        const data = await response.json();
        setError(data);
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Something went wrong");
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>

      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>

      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Auth;
