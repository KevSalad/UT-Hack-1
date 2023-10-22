import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

// Navbar Component
function Navbar() {
    return (
    
    <nav className="navbar">
        <h1 className='logo-text'>Pocket Watchers</h1> 
        <ul className='left-side'>
            <li>
                <Link to="/coruses">Courses</Link>
            </li>
            <li>
                <Link to="/expenses">Expenses</Link>
            </li>
            <li>
                <Link to="/calculator">Calculator</Link>
            </li>
        </ul>
        
        <div className='right-side'>
            <button className='contact0button'>
                <Link to="/signup">Contact Us</Link>
            </button>
            <button className='sign-button'>
                <Link to="/signup">Sign Up</Link>
            </button>
        </div>
      </nav>
    );
}

function LandingPage() {
    return (
        <div>
            <Navbar />
            
            {/* <nav>
                <ul>
                    <li>
                        <Link to="/signUp">Sign Up</Link>
                    </li>
                </ul>
            </nav> */}
        </div>
    );
}

export default LandingPage;