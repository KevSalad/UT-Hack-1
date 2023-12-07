import { Link } from 'react-router-dom';
import './Dashboard.css';
import Select from 'react-select'



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

    const options = [
        { value: 'Current', label: 'Current' },
        { value: '1 Month Ago', label: '1 Month Ago' },
        { value: '2 Months Ago', label: '2 Months Ago' },
        { value: '3 Months Ago', label: '3 Months Ago' }
      ]
    
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
                        {/* <img className='grid-background' src='/public/images/Courses-Picture.png' alt='Course'/>
                         */}
                        <div className='risk-div'>
                            <p className='risk'> Risk Management </p>
                            <p className='small-text'> Learn more about insurance, emergency funds, and risk mitigation </p>
                        </div>
                        <button className='course-button'> Start Course </button>
                    </div>

                    <div class="grid-item grid-item-3">
                        <div className='Transactions'> 

                            <div className='t-header'>
                                <p className='t-text'> Latest Transactions </p>
                                <button class="button-arrow">
                                    <img src="/images/Arrow.svg" alt="SVG5" class="svg-arrow" />
                                </button>
                            </div>
        
                            <div className='transaction-history'>
                                <p className='date'> 10-22 </p>
                                <p className='company'> Gongcha </p>
                                <p className='category'> Food </p>
                                <p className='cost'> $ -15.00</p>
                            </div>
                            <div className='transaction-history'>
                                <p className='date'> 10-20 </p>
                                <p className='company'> Amazon </p>
                                <p className='category'> Shopping </p>
                                <p className='cost'> $ -50.00</p>
                            </div>
                            <div className='transaction-history'>
                                <p className='date'> 10-18 </p>
                                <p className='company'> Target </p>
                                <p className='category'> Shopping </p>
                                <p className='cost'> $ -30.00</p>
                            </div>
                            <div className='transaction-history'>
                                <p className='date'> 10-15 </p>
                                <p className='company'> Starbucks </p>
                                <p className='category'> Food </p>
                                <p className='cost'> $ -10.00</p>
                            </div>
                            
                            <div className='see-more-footer'>
                                <button class="button-arrow">
                                    <p className='see-more'> See More </p>
                                    <img src="/images/Arrow.svg" alt="SVG6" class="arrow" />
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <div class="grid-item grid-item-4">
                        <div className='Expenses'>

                            <div className='e-header'>
                                <p className='e-text'> Expenses </p>
                                <button class="button-arrow">
                                    <img src="/images/Arrow.svg" alt="SVG7" class="svg-arrow" />
                                </button>
                            </div>
                            <div className='e-info'>
                                <div className='dropdown'>
                                    <Select options={options} 
                                    styles={{
                                        control: (baseStyles, state) => ({
                                            ...baseStyles,
                                            borderStyle: 'none', 
                                            fontSize : '12px',
                                        }),
                                        menu: (baseStyles, state) => ({
                                            ...baseStyles,
                                            fontSize : '12px',
                                            margin: '0px',
                                        }),
                                    }}
                                    />
                                </div>
                                <div className='e-cost'>
                                    <p className='small-text'> Monthly </p>
                                    <p className='cost-text'> $ 149.67 </p>
                                </div>
                            </div>
                        </div>
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