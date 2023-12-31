import React from 'react';
import { Link } from 'react-router-dom';
import './SignUpPage.css';

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

function LoginBox() {
    return (
        <div className="loginbox">
            <div className="bannerHalf">
                <img src='/images/SignInPage.png' alt="Sign In Illustration" />
            </div>
            <div className="loginHalf">
                <h2 className="loginHeading">Sign In</h2>
                <form>
                    <div className="form-group">
                        <label>Email Address</label>
                        <input type="email" name="email" required className="emailInput"/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" name="password" required className="passwordInput"/>
                        <p className='forgotPassword'>Forgot Password?</p>
                    </div>
                    <button type="submit" className="submitButton">Sign In</button>
                    <p class="texty">Dont have an account? <a href="/createAccount" class="blue-link">Create Account</a> </p>
                    <a href="/dashboard" class="blue-link">Temp link</a> 
                    
                </form>
            </div>
        </div>
    );
}

function ColorSplit() {
    return (
        <div className="colorsplit">
            <div className="topHalfSplit"></div>
            <div className="bottomHalfSplit"></div>
        </div>
    );
}


// SignUpPage Component
function SignUpPage() {
    return (
        <div>
            <Navbar />
            <ColorSplit />
            <LoginBox />
        </div>
    );
}

export default SignUpPage;
