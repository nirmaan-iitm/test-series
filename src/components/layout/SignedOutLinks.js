import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
  return (
      <ul className="navbar-nav">
        <li className="nav-item"><NavLink to='/signup'>SignUp</NavLink></li> &nbsp;
        <li className="nav-item"><NavLink to='/login'>Login</NavLink></li>
      </ul>
  )
}

export default SignedOutLinks