import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ logoutUser }) => {

    return (
        <header>
            <div>
                <nav className='footer'>
                        <Link to="/" className="link">
                            Logo
                        </Link>
                        <Link
                            to="/" className="link"
                        >
                            Contact us
                        </Link>
                        <Link
                            to="/" className="link"
                        >
                            Home
                        </Link>
                    
                        <Link
                            to="/"
                            onClick={logoutUser} className="link"
                        >
                            Logout
                        </Link>
                </nav>
            </div>
        </header>
    );
};

export default Footer;