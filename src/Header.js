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
          
          <div className = 'name'>
          <Link to = "/">
              <h1 style={{color: 'black'}}>
                  bloggit
              </h1>
          </Link>
              <p>Welcome, Dhruv Savla </p>
            </div>
            
          <div className='header_nav'>
            <input className='header_searchInput' type='text'/>
              <FaSearch style={{background: 'orange', height: '25px', marginRight:'30px'}} />
              <Link to = "/blogpost">
                <span><p style={{color: 'black'}}>write blog</p></span>
              </Link>
              <span><p>sort by</p></span>
              <Link to = "/login">
                <span><button>login</button></span>
              </Link>
          </div>
      </div>
  )
}

export default Header