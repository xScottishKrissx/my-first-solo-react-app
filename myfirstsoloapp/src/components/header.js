import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
export const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/page1'>Page 1</Link></li>
        <li><Link to='/page2'>Page 2</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header;