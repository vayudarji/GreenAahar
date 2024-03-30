import { Outlet, Link } from "react-router-dom";
import React from 'react'
import Logout from "./Logout";

function Layout() {
  return (
    <nav>
        <ul>
            <li>
                <Link to="/home">Home</Link>
            </li>
            <li>
                <Link to="/">Signup and SignIn</Link>
            </li>
            <li>
                <Link to="/RestaurantProfile">Restaurant Profile</Link>
            </li>
            <Logout />
            <li>
                <Link to="/RestaurantList">Product listing</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Layout