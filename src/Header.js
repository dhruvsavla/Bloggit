import React from 'react'
import "./Header.css"
import logo from "./logo.png"; 
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Header() {
  return (
      <div className='Header'>
          <Link to = "/">
              <img className='header_logo' src={logo} />
          </Link>
          <Link to = "/">
          <div className = 'name'>
              <h1>
                  bloggit
              </h1>
              <p>Welcome, Dhruv Savla </p>
            </div>
            </Link>
          <div className='header_nav'>
            <input className='header_searchInput' type='text'/>
              <FaSearch style={{background: 'orange', height: '25px', marginRight:'30px'}} />
              <span><p>write blog</p></span>
              <span><p>sort by</p></span>
              <span><button>login</button></span>
          </div>
      </div>
  )
}

export default Header