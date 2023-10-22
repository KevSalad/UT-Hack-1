import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

function LandingPage(){
    return (
        <div>
            <h1>Sample Text for Landing Page</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/signUp">Sign Up</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default LandingPage;