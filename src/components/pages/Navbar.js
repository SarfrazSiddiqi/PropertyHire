import React from 'react'
import { FaHouzz} from "react-icons/fa"
import { Link } from 'react-router-dom'
import './Navbar.css';


const navbar = () => {
  return (
    <div className='navigation-bar'>
        <div id='navigation-container'>
            <div className='home-icon'>
                <Link to ="/"><FaHouzz /> Property Hire</Link>
            </div>
            <div className='navigation-list'>
                   <Link className='box' to ="/rent">Rent</Link>
                   <Link to ="/buy">Buy</Link>
                   <Link to ="/sell">Sell</Link>
                   <Link to ="/manageProperty">Manage Property</Link>
                   <Link to ="/resources">Resources</Link>
            </div>
            <div className='login-buttons'>
                 <button className='login-btn'>Login</button>
                 <button className='signUp-btn'>Sign up</button>
            </div>
        </div>
    </div>
  )
}

export default navbar