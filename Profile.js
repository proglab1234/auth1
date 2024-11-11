import React, { useState } from 'react';
import axios from 'axios';

function Profile() {
  const [user, setUser] = useState(null);

  const fetchProfile = async () => {
    try {
      const response = await axios.get('http://localhost:5000/profile', { withCredentials: true });
      setUser(response.data);
    } catch (err) {
      console.error('Error fetching profile:', err);
    }
  };

  return (
    <div>
      <h2>Profile</h2>
      <button onClick={fetchProfile}>Load Profile</button>
      {user && (
        <div >
          <p style={{border:'solid black'}}><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      )}
    </div>
  );
}

export default Profile;
