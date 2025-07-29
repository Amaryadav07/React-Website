
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const handleSignupRedirect = () => {
    navigate("/home");
  };
  

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.email === email && u.password === password && u.mobile === mobile
    );

    if (user) {
      setSuccess(true);
    } else {
      setError("Invalid credentials.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-gradient" style={{ background: 'linear-gradient(to right, #e0c3fc, #8ec5fc)' }}>
      <div className="card p-5 shadow-lg animate__animated animate__fadeInDown" style={{ maxWidth: "500px", width: "100%", borderRadius: "1rem" }}>
        <h2 className="text-center mb-4 text-primary">Welcome-Back</h2>
        <form onSubmit={handleLogin}>
          
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="mobile" className="form-label">Mobile Number</label>
            <input
              type="tel"
              className="form-control"
              id="mobile"
              placeholder="Enter mobile number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
          </div>
          {error && <div className="alert alert-danger" role="alert">{error}</div>}
          {success && <div className="alert alert-success" role="alert">Login successful!</div>}
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
        <div className="text-center mt-3">
          <span>Don't have an account? </span>
          <Link to="/signup" className="text-decoration-none text-primary fw-bold">Sign up here</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
