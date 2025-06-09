import React from 'react';

const Profile = () => {
  return (
    <div className="container">
      <div className="card" style={{ maxWidth: '800px', margin: '2rem auto' }}>
        <h2 className="section-title">Profile</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem' }}>
          <div>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <img
                src="https://placehold.co/150x150"
                alt="Profile"
                style={{ borderRadius: '50%', marginBottom: '1rem' }}
              />
              <h3>John Doe</h3>
              <p>john.doe@example.com</p>
            </div>
          </div>
          <div>
            <h3>Account Information</h3>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" className="form-control" value="John Doe" readOnly />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-control" value="john.doe@example.com" readOnly />
            </div>
            <div className="form-group">
              <label>Member Since</label>
              <input type="text" className="form-control" value="January 2024" readOnly />
            </div>
            <button className="btn btn-primary">Edit Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 