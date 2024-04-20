import React from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from "react-redux";
import LeftNavBar from '../LeftNavBar/LeftNavBar';
import RightNavBar from '../RightNavBar/RightNavBar';

function Main() {
  const { user } = useSelector((state) => state.auth);
  return (
    <>
        <main className='flex'>
            {user ? <LeftNavBar /> : <></>}
            <Outlet />
            {user ? <RightNavBar /> : <></>}
        </main>
    </>
  )
}

export default Main