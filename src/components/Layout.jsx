import { Outlet, Link } from "react-router-dom";
import React from 'react'

function Layout() {
  return (
    <nav>
        <ul>
            <li>
                <Link to="/home">Home</Link>
            </li>
            <li>
                <Link to="/Signup">Signup</Link>
            </li>
            <li>
                <Link to="/Signin">Signin</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Layout