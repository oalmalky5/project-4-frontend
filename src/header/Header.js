import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'

const authenticatedOptions = (user) =>
{
  return(
    <React.Fragment>
      {user.admin ? 
            <Link to="create">Add Product</Link>
            : '' }
      <Link to="/products">Cart</Link>
      <Link to="/change-password">Change Password</Link>
      <Link to="/sign-out">Sign Out</Link>
    </React.Fragment>
  )
}
const unauthenticatedOptions = (
  <React.Fragment>
    <Link to="/sign-up">Sign Up</Link>
    <Link to="/sign-in">Sign In</Link>
  </React.Fragment>
)

const alwaysOptions = (
  <React.Fragment>
    <Link to="/">Home</Link>
  </React.Fragment>
)

const Header = ({ user }) => (
  <header className="main-header">
    <h1 color="brown">Decks Records</h1>
    <nav>
      { user && <span>Welcome, {user.email}</span>}
      { user ? authenticatedOptions(user) : unauthenticatedOptions }
      { alwaysOptions }
    </nav>
  </header>
)

export default Header
