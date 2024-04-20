import React from 'react'
import { Outlet } from 'react-router-dom'

function Footer() {
  return (
    <>
        <Outlet />
        <footer className='border-t-[1px] border-t-black p-4'>&copy; 2024</footer>
    </>
  )
}

export default Footer