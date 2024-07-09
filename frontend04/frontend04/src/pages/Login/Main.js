import React, { useState } from "react";
function Main() {
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [firstName, setFirsname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isAdmin, setIsAdmin] = useState(true); 
  const [loggedIn, setLoggedIn] = useState(false); 

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
        body: JSON.stringify({firstName,email, password }),
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
         localStorage.setItem('userData', JSON.stringify(data));
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
        class="card mx-auto"
        style={{ maxWidth: "380px", marginTop: "100px" }}
      >
        <div class="card-body">
          <h4 class="card-title mb-4">Sign in</h4>
          <form>
            <div class="form-group">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                class="form-control"
                placeholder="Email"
                type="text"
              />
            </div>
            <div class="form-group">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                class="form-control"
                placeholder="Password"
                type="password"
              />
            </div>

            <div class="form-group">
              <a href="/register" class="float-right">
                Đăng kí
              </a>
              <label class="float-left custom-control custom-checkbox">
                {" "}
                <input
                  type="checkbox"
                  class="custom-control-input"
                  checked=""
                />{" "}
                <div class="custom-control-label"> Remember </div>{" "}
              </label>
            </div>
            <div class="form-group">
            <button type="button" onClick={handleLogin}>Sign In</button>

            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Main;
