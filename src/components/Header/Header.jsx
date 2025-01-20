import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.scss";

function Header({ user }) {
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
        </ul>
      </nav>
    </header>
    // <nav>
    //   <ul>
    //     <li><Link to="/">HandOver</Link></li>
    //     <li><Link to="/profile">Profile</Link></li>
    //   </ul>
    // </nav>
  );
}

export default Header;
