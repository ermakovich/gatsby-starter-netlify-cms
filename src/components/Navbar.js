import React from 'react'
import Link from 'gatsby-link'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          МОЯ территория
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/about">
          Обо Мне
        </Link>
      </div>
    </div>
  </nav>
)

export default Navbar
