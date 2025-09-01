import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({ ...prev, [name]: value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Hardcoded admin credentials
    const adminUsername = "admin";
    const adminPassword = "admin123";

    if (
      credentials.username === adminUsername &&
      credentials.password === adminPassword
    ) {
      // Save token in localStorage
      localStorage.setItem("adminToken", "123456"); // simple token
      navigate("/admin/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width: "350px" }}>
        <h3 className="text-center mb-3">Admin Login</h3>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              name="username"
              value={credentials.username}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <button type="submit" className="btn w-100" style={{backgroundColor:'#ff6600',color:'#fff'}}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
