// src/pages/Profile.jsx
import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [userInfo, setUserInfo] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    photo: '', // photo URL or base64
  });

  // Load data from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('biteBuddyUser');
    if (storedUser) {
      setUserInfo(JSON.parse(storedUser));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo(prev => ({ ...prev, [name]: value }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUserInfo(prev => ({ ...prev, photo: reader.result }));
      };
      reader.readAsDataURL(file); // store image as base64 in localStorage
    }
  };

  const handleSave = () => {
    // Save all data to localStorage
    localStorage.setItem('biteBuddyUser', JSON.stringify(userInfo));
    alert('Profile updated successfully!');
  };

  return (
    <div style={styles.container}>
      {/* Left: Profile Picture & Info */}
      <div style={styles.left}>
        <div style={styles.avatarWrapper}>
          {userInfo.photo ? (
            <img src={userInfo.photo} alt="Profile" style={styles.avatar} />
          ) : (
            <div style={styles.placeholder}>
              <span>No Photo</span>
            </div>
          )}
          <label style={styles.changePhotoBtn}>
            {userInfo.photo ? 'Change Photo' : 'Add Photo'}
            <input type="file" accept="image/*" onChange={handlePhotoChange} style={{ display: 'none' }} />
          </label>
        </div>
        <h2 style={styles.name}>{userInfo.fullName || 'Your Name'}</h2>
        <p style={styles.email}>{userInfo.email || 'Email Address'}</p>
      </div>

      {/* Right: Edit Form */}
      <div style={styles.right}>
        <h2 style={styles.heading}>Profile Details</h2>
        <form style={styles.form}>
          <label style={styles.label}>Full Name</label>
          <input
            type="text"
            name="fullName"
            value={userInfo.fullName}
            onChange={handleChange}
            style={styles.input}
          />

          <label style={styles.label}>Email</label>
          <input
            type="email"
            name="email"
            value={userInfo.email}
            onChange={handleChange}
            style={styles.input}
          />

          <label style={styles.label}>Phone</label>
          <input
            type="text"
            name="phone"
            value={userInfo.phone}
            onChange={handleChange}
            style={styles.input}
          />

          <label style={styles.label}>Address</label>
          <textarea
            name="address"
            value={userInfo.address}
            onChange={handleChange}
            style={{ ...styles.input, height: '80px', resize: 'none' }}
          />

          <button type="button" style={styles.saveBtn} onClick={handleSave}>
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: { display: 'flex', gap: '40px', padding: '30px', flexWrap: 'wrap' },
  left: { flex: 1, minWidth: '250px', textAlign: 'center', padding: '20px', border: '1px solid #ccc', borderRadius: '12px', backgroundColor: '#fff8f0' },
  avatarWrapper: { position: 'relative', marginBottom: '15px' },
  avatar: { width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover' },
  placeholder: { width: '150px', height: '150px', borderRadius: '50%', backgroundColor: '#eee', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '14px', color: '#888' },
  changePhotoBtn: { position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)', padding: '6px 12px', fontSize: '12px', borderRadius: '20px', border: 'none', backgroundColor: '#ff6600', color: '#fff', cursor: 'pointer' },
  name: { margin: '10px 0 5px', fontSize: '20px', fontWeight: '600' },
  email: { fontSize: '14px', color: '#555' },
  right: { flex: 2, minWidth: '300px', padding: '25px', border: '1px solid #ccc', borderRadius: '12px', backgroundColor: '#fff' },
  heading: { marginBottom: '20px', fontSize: '22px', fontWeight: '600', color: '#333' },
  form: { display: 'flex', flexDirection: 'column', gap: '15px' },
  label: { fontSize: '14px', fontWeight: '500', color: '#555' },
  input: { padding: '12px 15px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '14px', outline: 'none', transition: 'border-color 0.3s' },
  saveBtn: { marginTop: '15px', padding: '14px 0', fontSize: '16px', fontWeight: '500', color: '#fff', backgroundColor: '#ff6600', border: 'none', borderRadius: '8px', cursor: 'pointer', transition: 'background 0.3s' },
};

export default Profile;
