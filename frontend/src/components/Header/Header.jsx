import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import {FaSignInAlt, FaUser} from 'react-icons/fa';


function Header() {
  return (
    <>
        <header className='flex justify-between p-4 items-center border-b-[1px] border-b-black'>
            <div>
                Logo
            </div>
            <ul className='flex gap-2 justify-center items-center'>
                <li>
                    <Link to={'/login'} className='flex gap-2 justify-center items-center'>
                        <FaSignInAlt /> Login
                    </Link>
                </li>
                <li>
                    <Link to={'/register'} className='flex gap-2 justify-center items-center'>
                        <FaUser /> Register
                    </Link>
                </li>
            </ul>
        </header>
        <Outlet />
    </>
  )
}

export default Header