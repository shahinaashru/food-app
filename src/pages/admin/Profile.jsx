import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminProfile = () => {
  // Load from localStorage or defaults
  const storedData = JSON.parse(localStorage.getItem("adminProfile")) || {};

  const [profile, setProfile] = useState({
    fullName: storedData.fullName || "John Doe",
    email: storedData.email || "admin@example.com",
    phone: storedData.phone || "+123456789",
    role: storedData.role || "Administrator",
    photo: storedData.photo || "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  // Handle photo upload
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const photoURL = URL.createObjectURL(file);
      setProfile(prev => ({ ...prev, photo: photoURL }));
    }
  };

  // Save to localStorage
  const handleSave = () => {
    localStorage.setItem("adminProfile", JSON.stringify(profile));
    alert("Profile updated successfully!");
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Admin Profile</h2>
      <div className="row">
        {/* Left: Profile Photo */}
        <div className="col-md-4 text-center">
          <div className="mb-3">
            {profile.photo ? (
              <img
                src={profile.photo}
                alt="Profile"
                className="rounded-circle img-thumbnail"
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
            ) : (
              <div
                className="rounded-circle bg-secondary d-flex align-items-center justify-content-center"
                style={{ width: "150px", height: "150px", color: "#fff" }}
              >
                No Photo
              </div>
            )}
          </div>
          <div>
            <label className="btn btn-sm btn-primary">
              {profile.photo ? "Change Photo" : "Add Photo"}
              <input type="file" accept="image/*" onChange={handlePhotoChange} hidden />
            </label>
          </div>
        </div>

        {/* Right: Profile Info */}
        <div className="col-md-8">
          <form>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={profile.fullName}
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input
                type="text"
                name="phone"
                value={profile.phone}
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Role</label>
              <input
                type="text"
                name="role"
                value={profile.role}
                onChange={handleChange}
                className="form-control"
                readOnly
              />
            </div>

            <button type="button" className="btn btn-success" onClick={handleSave}>
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
