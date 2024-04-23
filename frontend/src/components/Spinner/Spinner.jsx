import React from 'react';
import { FaSpinner } from "react-icons/fa";

function Spinner() {
    //TODO
  return (
    <div className='flex items-center justify-center w-screen h-screen'>
      <FaSpinner className='h-5 w-5 animate-spin'/> Loading...
    </div>
  )
}

export default Spinner