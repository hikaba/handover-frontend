import React from 'react';
import { Link } from 'react-router-dom';

function Nav({ user }) {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#f0f0f0' }}>
      <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-around' }}>
        <li><Link to="/">Home</Link></li>
        {user ? (
          <>
            <li><Link to="/profile">Profile</Link></li>
            <li><button onClick={() => console.log('Logout clicked')}>Logout</button></li>
          </>
        ) : (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Nav;
