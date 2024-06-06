import React from 'react';
import logo from '../download (3).jpg';
export default function Header() {
  return (
    <div className='header'>
        <div className='logo'>
           <img src={logo}/>
        </div>
        <div className='navItems'>
           <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
           </ul>
        </div>
    </div>
  )
}
