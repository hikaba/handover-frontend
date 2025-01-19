import React from 'react';
import { Link } from 'react-router-dom';

function Header({ user }) {
  return (
    <nav>
      <ul>
        <li><Link to="/">HandOver</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </nav>
  );
}

export default Header;
