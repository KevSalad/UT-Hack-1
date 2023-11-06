import { Link } from 'react-router-dom';
import './Dashboard.css';

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
                    <Link to="/">Log Out</Link>
                </button>
            </div>
        </nav>
    );
}

function DashboardSum() {
    return (
        <div class="background">
            <div class="b-div top-div">
                <h1 class="user">Hello, User</h1>
            </div>
            <div class="b-div bot-div"></div>
            <div class="dashboard">
                <form class="grid-container">
                    <div class="grid-item grid-item-1">

                        <div className='left-dash'> 
                            <p className='savings'> Savings Account </p>
                            <p className='small-text'> 12345678910 </p>
                            <button className='more-button'> More Details </button>
                        </div>

                        <div className='right-dash'> 
                            <p className='small-text'> Account Balance </p>
                            <p className='balance'> $ 20,167.26 </p>
                        </div>
                    </div>

                    <div class="grid-item grid-item-2">
                        
                    </div>
                    <div class="grid-item grid-item-3">

                    </div>
                    <div class="grid-item grid-item-4">

                    </div>
                </form>
            </div>
        </div>
    );
}

function Footer() {
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

function Dashboard() {
    return (
        <div>
            <Navbar />
            <DashboardSum />
            <Footer />
        </div>
    );
}

export default Dashboard;