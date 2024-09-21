import React from 'react';

import { Link } from 'react-router-dom';
// In React Router, the Link component is used to create navigation links between different routes in your application without
// causing a full page reload. This allows for a smoother and faster user experience.

function Header() {
  return (
    <div className="bg-slate-200">
         <div className="flex justify-between items-center max-w-6xl mx-auto p-3">       {/*tailwind css class*/}
            <Link to='/'>
            <h1 className="font-bold">Auth App</h1>
            </Link>
            <ul className='flex gap-4'>
              <Link to='/'>
              <li>Home</li>
              </Link>
              <Link to='/about'>
              <li>About</li>
              </Link>
              <Link to='/sign-in'>
              <li>Sign In</li>
              </Link>
            </ul>
        </div> 
    </div>
  )
}

export default Header