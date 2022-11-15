import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
        <Link className="navtext" to='/'>Homepage</Link>
        <Link className="navtext" to='/products'>Product Detail</Link>
        <Link className="navtext" to='/cart'>Cart</Link>
    </div>
  )
}

export default Navbar