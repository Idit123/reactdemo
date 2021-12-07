import React from "react"
import logo from "../assets/header.png"
import { Navbar } from "../style/header.style"
import { Link, Outlet } from "react-router-dom"

export default function Header() {
  return (
    <>
      <Navbar>
        <div className="container">
          <img src={logo} alt="" />
          <div className="navbar">
            <ul>
              <li className="nav-item">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/how-it-woks">How it works</Link>
              </li>
              <li className="nav-item">
                <Link to="/our-services">Service</Link>
              </li>
              <li className="nav-item">
                <Link to="/about-us">About Us</Link>
              </li>
              <li className="nav-item">
                <Link to="/faq">FAQ</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact-us">Contact Us</Link>
              </li>
            </ul>
            <button className="btn-primary" type="button">
              <Link to="/login">Sign In</Link>
            </button>
            <button className="btn-primary" type="button">
              <Link to="/register">Sign Up</Link>
            </button>
          </div>
        </div>
        <Outlet />
      </Navbar>
    </>
  )
}
