import React from 'react'
import './HomeNav.css'

const HomeNav = () => {
  return (
    <div>
        <nav className='HomeNav'>
        <ul className='HomeUl'>
        <li className='HomeLi'><a className="current" href='#'>Home</a></li>
        <li className='HomeLi'><a className='HomeA' href="#news">News</a></li>
        <li className='HomeLi'><a className='HomeA' href="#about">About</a></li>
        <li className='HomeLi'><a className='HomeA' href="#recruit">Recruit</a></li>
        <li className='HomeLi'><a className='HomeA' href="#access">Access</a></li>
        </ul>
    </nav>
        
    </div>
  )
}

export default HomeNav