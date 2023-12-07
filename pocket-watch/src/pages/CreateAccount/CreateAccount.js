// import React from 'react';
import { Link } from 'react-router-dom';
import './CreateAccount.css';

// Navbar Component
function Navbar() {
    return (

        <nav className="navbar">
            <h1 className='logo-text'> <a href="/">PocketWatchers</a></h1> 
            <ul className='left-side'>
                <li>
                    <Link to="/courses">Courses</Link>
                </li>
                <li>
                    <Link to="/expenses">Expenses</Link>
                </li>
                <li>
                    <Link to="/calculator">Calculator</Link>
                </li>
            </ul>

            <div className='right-side'>
                <button className='contact-button'>
                    <Link to="/signup">Contact Us</Link>
                </button>
                <button className='sign-button'>
                    <Link to="/signup">Sign In</Link>
                </button>
            </div>
        </nav>
    );
}

function ColorSplit() {
    return (
        <div className="colorsplit">
            <div className="bottomHalfSplit"></div>
            <div className="topHalfSplit"></div>
        </div>
    );
}

function LoginBox() {
    return (
        <div className="loginbox">
            <div className="bannerHalf">
                <img src='/images/Left-Vector-Art.svg' alt="Sign In Illustration" />
            </div>
            <div className="loginHalf">
                <h2 className="loginHeading">Create an account</h2>
                <form>
                    <div className="form-group">
                        <label>Email Address</label>
                        <input type="email" name="email" required className="emailInput"/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" name="password" required className="passwordInput"/>
                    </div>
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input type="password" name="confirmPassword" required className="passwordInput" />
                    </div>
                    <button type="submit" className="submitButton">Sign In</button>
                </form>
            </div>
            <div className="bannerHalf">
                <img src='/images/Right-Vector-Art.svg' alt="Sign In Illustration" />
            </div>
        </div>
    );
}

function CreateAccount() {
    return (
        <div>
            <Navbar />
            <ColorSplit />
            <LoginBox />
        </div>
    );
}

export default CreateAccount;