import React from 'react'
import { Outlet } from 'react-router-dom'

function Main() {
  return (
    <>
        <main className='p-4'>
            <Outlet />
        </main>
    </>
  )
}

export default Main