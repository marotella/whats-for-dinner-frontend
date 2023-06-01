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
                        <img src={process.env.PUBLIC_URL + '/Icon.png'} alt="Icon" className="icon" style={{ margin: 'auto' }}/>
                        <Link
                            to="/" className="link"
                        >
                            Home
                        </Link>
                    
                        <Link
                            to="/user/logout"
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