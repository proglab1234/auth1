import React from 'react';
import { useNavigate } from 'react-router-dom';
function Home() {
    const navigate=useNavigate();
    const gotoprofile=async (e)=>{
        e.preventDefault();
        navigate('/profile');
    };

    const gotologout=async (e)=>{
        e.preventDefault();
        navigate('/logout');
    };


  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <button onClick={gotoprofile}>profile</button>
      <button onClick={gotologout}>Logout</button>
    </div>
  );
}

export default Home;
