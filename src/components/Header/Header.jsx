import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { doSignOut } from '../../firebase/auth';
import "./Header.scss";

function Header({ user }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try{
      await doSignOut();
      navigate('/login');
    } catch (error) {
      console.error("error signing out: ", error.message)
    }
  }

  return (
    <header className="header">
      <Link to={"/"} className='header__link'>
        <h1 className="header__title">
          HandOver
        </h1>
      </Link>
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__list-item">
            <Link to={"/"} className='header__nav-link'>Home</Link>
          </li>
          <li className="header__list-item">
            <Link to={"/profile"} className='header__nav-link'>Profile</Link>
          </li>
          <li className="header__list-item">
            <Link onClick={handleLogout} className='header__nav-link header__logout-btn'>Logout</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
