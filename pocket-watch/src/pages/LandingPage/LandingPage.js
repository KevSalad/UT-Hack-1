// import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

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
                    <Link to="/signUp">Contact Us</Link>
                </button>
                <button className='sign-button'>
                    <Link to="/signUp">Sign In</Link>
                </button>
            </div>
        </nav>
    );
}

function introHeader() {
    return (
        <div class="background-div">
            <div class="intro-header-div">
                <h2 class="intro-header">Financial Banking for Beginners</h2>
                <p class="intro-header-text">Learn how to save and budget simply-no experience required</p> 
                <button class="intro-header-button">Learn More</button>
            </div>
        </div>
        
    );
}

function aboutUs() {
    return (
        <div class="about-us-div">
            <h2 class="about-us-header">Making Bad Into <span className='blue-text'> Good </span> </h2>
            <p class="about-us-text">“Pocket Watching” often has a negative connotation, with one paying close attention to others’ financial choices. However, with PocketWatchers, we want our clients to watch their spending, providing them resources to spend smartly and make wise financial decisions! </p>
            <p class="about-us-text">Our goal is to emphasize strategic budgeting and financial consciousness in today’s Youth, preparing them to invest in financial stability for their futures. </p>
        </div>
    );
}

// <img src='/public/images/Finance_Icon_1.svg' alt='SVG1'/>
function financialDiv() {
    return (
        <div class="financial-div">
            <div className='tip-div'>
                <h2 className='tip-header'> <img className='svgs' src='/images/Finance_Icon_1.svg' alt='SVG1'/> Financial Literacy Simplified</h2>
                <p className='tip-text'>Unsure about the basics of managing your finances? Take engaging lessons from us to learn more about smart spending habits that will guide you into making informed and mindful financial decisions. </p>
            </div>
            <div className='image-div'>
                {/* <img src='/public/images/taking-notes.png' alt='Taking-Notes'/> */}
            </div>
        </div>
    );
}

function trackingDiv() {
    return (
        <div class="tracking-div">
            <div className='image-div'> </div>
            <div className='tip-div'>
                <h2 className='tip-header'> <img className='svgs' src='/images/Finance_Icon_2.svg' alt='SVG2'/>Financial Literacy Simplified</h2>
                <p className='tip-text'>With our Expense Tracker, see a visual representation of your past purchases and understand your spending habits. </p>
            </div>
        </div>
    );
}

function budgetDiv() {
    return (
        <div class="budget-div">
            <div className='tip-div'>
                <h2 className='tip-header'> <img className='svgs' src='/images/Finance_Icon_3.svg' alt='SVG3'/>Financial Literacy Simplified</h2>
                <p className='tip-text'>Practice your newly learned skills in budgeting by calculating your spending and savings with our Financial Calculator. </p>
            </div>
            <div className='image-div'>
                {/* <img src='/public/images/taking-notes.png' alt='Taking-Notes'/> */}
            </div>
        </div>
    );
}

function ad(){
    return (
        <div class="ad-div">
            <div class="ad-div-box">
                <div class="left-ad">
                    <p class="ad-header">Ready to Join?</p>
                    <p class="ad-text">Create an account with us and start your financial journey! </p>
                </div>
                <div class="right-ad">
                    <a class="ad-button" href="/createAccount">Create an account</a>
                    <p class="texty">Already have an account? <a href="/signup" class="blue-link">Log In</a> </p>
                </div>
            </div>
        </div>
    );
}

function footer() {
    return (
        <div class="footer">
            <div class="footer-div">   
                <div class="footer-left">
                    <h1 class="footer-logo">PocketWatchers</h1>
                </div>

                <div class="footer-right">
                    <h3 class="contact-us">Contact Us</h3>

                    <div class="socials">
                        <div class="email-container">
                            <p class="contact"><a href="mailto:kevinsalad7@gmail.com"> Kevin Saldana: kevinsalad7@gmail.com</a> </p>
                        </div>
                        <div class="socials-container">
                            <img className='svg-socials' src='/images/Linkedin-Icon.svg' alt='SVG4'/>
                            <img className='svg-socials' src='/images/Social-Icons.svg' alt='SVG4'/>
                        </div>

                        <div class="email-container">
                            <p class="contact"><a href="mailto:anthonyd4101@gmail.com"> Anthony Delgado: anthonyd4101@gmail.com</a> </p>
                        </div>
                        <div class="socials-container">
                            <img className='svg-socials' src='/images/Linkedin-Icon.svg' alt='SVG4'/>
                            <img className='svg-socials' src='/images/Social-Icons.svg' alt='SVG4'/>
                        </div>

                        <div class="email-container">
                        <p class="contact"><a href="mailto:rebeccamsantos7@gmail.com"> Rebecca Santos: rebeccamsantos7@gmail.com</a> </p>
                        </div>
                        <div class="socials-container">
                            <img className='svg-socials' src='/images/Linkedin-Icon.svg' alt='SVG4'/>
                            <img className='svg-socials' src='/images/Social-Icons.svg' alt='SVG4'/>
                        </div>
                    </div>
                </div>
            </div>

            <div class="trademark">
                <p class="trademark-text">© 2023 PocketWatchers. All Rights Reserved.</p>
            </div>
        </div>

    );
}


function LandingPage() {
    return (
        <div>
            <Navbar />
            {introHeader()} 
            {aboutUs()}
            {financialDiv()}
            {trackingDiv()}
            {budgetDiv()}
            {ad()}
            {footer()}
        </div>
    );
}

export default LandingPage;