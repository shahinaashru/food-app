import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Settings = () => {
  const [settings, setSettings] = useState({
    fullName: "Shahina AK",
    email: "admin@bitebuddy.com",
    currentPassword: "",
    newPassword: "",
    notifications: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSaveProfile = () => {
    alert("Profile settings saved!");
    // Save to backend/localStorage
  };

  const handleSaveSecurity = () => {
    alert("Security settings updated!");
    // Save password change
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Settings</h2>

      {/* Profile Settings */}
      <div className="card mb-4 shadow">
        <div className="card-header">
          <h5>Profile Settings</h5>
        </div>
        <div className="card-body">
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={settings.fullName}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              value={settings.email}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="form-check form-switch mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              name="notifications"
              checked={settings.notifications}
              onChange={handleChange}
              id="notificationsSwitch"
            />
            <label className="form-check-label" htmlFor="notificationsSwitch">
              Email Notifications
            </label>
          </div>

          <button className="btn btn-primary" onClick={handleSaveProfile}>
            Save Profile
          </button>
        </div>
      </div>

      {/* Security Settings */}
      <div className="card shadow">
        <div className="card-header">
          <h5>Security Settings</h5>
        </div>
        <div className="card-body">
          <div className="mb-3">
            <label className="form-label">Current Password</label>
            <input
              type="password"
              name="currentPassword"
              value={settings.currentPassword}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">New Password</label>
            <input
              type="password"
              name="newPassword"
              value={settings.newPassword}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <button className="btn btn-danger" onClick={handleSaveSecurity}>
            Update Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;

