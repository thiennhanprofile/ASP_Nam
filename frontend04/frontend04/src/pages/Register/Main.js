import React, { useState } from "react";

const Register = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [firstName, setFirsname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isAdmin, setIsAdmin] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const [lastName, setLastName] = useState(""); // Thêm state cho lastname

  const switchToSignupForm = () => {
    setShowLoginForm(false);
  };

  const switchToLoginForm = () => {
    setShowLoginForm(true);
  };

  const handleRegister = async () => {
    try {
      const response = await fetch("https://localhost:7255/api/Auth/Register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstName,lastName, email, password }),
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
        localStorage.setItem("userData", JSON.stringify(data));
        setLoggedIn(true);
        // Chuyển hướng đến trang chính sau khi đăng nhập thành công
        window.location.href = "/";
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
    <>
      <div
        className="card mx-auto"
        style={{ maxWidth: "380px", marginTop: "100px" }}
      >
        <div className="card-body">
          <h4 className="card-title mb-4">Sign up</h4>
          <form>
            <div className="form-group">
              <input
                value={firstName}
                onChange={(e) => setFirsname(e.target.value)}
                className="form-control"
                placeholder="Username"
                type="text"
              />
            </div>
            <div class="form-group">
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                class="form-control"
                placeholder="Last Name"
                type="text"
              />
            </div>
            <div className="form-group">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                placeholder="Email"
                type="text"
              />
            </div>
            <div className="form-group">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                placeholder="Password"
                type="password"
              />
            </div>
            <div className="form-group">
              <a href="/login" className="float-right">
                Đăng nhập
              </a>
              <label className="float-left custom-control custom-checkbox">
                {" "}
                <input
                  type="checkbox"
                  className="custom-control-input"
                  checked=""
                />{" "}
                <div className="custom-control-label"> Remember </div>{" "}
              </label>
            </div>
            <div className="form-group">
              <button type="button" onClick={handleRegister}>
                Sign Up
              </button>
            </div>
            {/* {successMessage && (
              <div className="alert alert-success" role="alert">
                {successMessage}
              </div>
            )} */}
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
