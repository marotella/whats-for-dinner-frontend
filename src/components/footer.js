import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ logoutUser }) => {

    return (
        <header>
            <div>
                <nav className='footer'>
                    <Link to="/" className="link">
                        About us
                    </Link>
                    <Link
                        to="/" className="link"
                    >
                        Contact us
                    </Link>
                    <img src={process.env.PUBLIC_URL + '/Icon.png'} alt="Icon" className="icon" style={{ margin: 'auto' }} />
                    <Link to="/" className="link">
                        <span className="material-symbols-outlined">
                            home
                        </span>
                    </Link>
                    <Link
                        to="/user/logout"
                        onClick={logoutUser} className="link"
                    >
                        <span className="material-symbols-outlined">
                            logout
                        </span>
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Footer;