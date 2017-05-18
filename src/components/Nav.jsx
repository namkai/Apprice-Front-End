import React from 'react';
import { Link } from 'react-router';

const Nav = props => (
  <nav>
    <ul>
      <li>
        <div id="logo">
          <Link to={'/'}>Apprice</Link>
        </div>
      </li>
      <div id="links">
        <li>
          <Link to={'/signup'}>Sign Up</Link>
        </li>
        <li>
          <Link to={'/login'}>Log In</Link>
        </li>
        <li>
          <Link to={'/help'}>Help</Link>
        </li>
      </div>
    </ul>
  </nav>
    );

export default Nav;
