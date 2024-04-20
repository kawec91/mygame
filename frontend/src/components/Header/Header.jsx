import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import {FaSignInAlt, FaUser, FaSignOutAlt, FaEnvelopeOpen} from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../../features/auth/authSlice';


function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    const onLogout = () => {
        dispatch(logout());
        dispatch(reset());
        navigate('/');
    }
    //TODO:ButtonStyle
  return (
    <>
        <header className='flex justify-between p-4 items-center border-b-[1px] border-b-black'>
            <div>
                Logo
            </div>
            <ul className='flex gap-2 justify-center items-center'>
                {user ? (<>
                    <li>
                        <Link to={'/mail'} className='flex gap-2 justify-center items-center'>
                            <FaEnvelopeOpen /> Mail [ 0 ]
                        </Link>
                    </li>
                    <li>
                        <button onClick={onLogout} className='flex gap-2 justify-center items-center'>
                            <FaSignOutAlt /> Logout
                        </button>
                    </li>
                </>) : (<>
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
                </>)}
                
            </ul>
        </header>
        <Outlet />
    </>
  )
}

export default Header