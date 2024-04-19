import React from 'react';
import { Link } from 'react-router-dom';
import {FaSignInAlt, FaUser} from 'react-icons/fa';


function Header() {
  return (
    <header>
        <div>
            Logo
        </div>
        <ul>
            <li>
                <Link to={'/login'}>
                    <FaSignInAlt /> Login
                </Link>
            </li>
            <li>
                <Link to={'/register'}>
                    <FaUser /> Register
                </Link>
            </li>
        </ul>
    </header>
  )
}

export default Header