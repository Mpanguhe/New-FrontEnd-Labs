import React from 'react';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
