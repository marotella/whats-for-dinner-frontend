import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ logoutUser }) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <header className="sticky top-0 bg-gray-900">
                <nav className="nav">
                       
                                <Link to="/" className="link">Logo</Link>
                                <Link to="/" className="link">Home</Link>
                                <Link to="/ingredients/new" className="link">New</Link>
                                <Link to="/user/login" className="link">Sign In</Link>
                                <Link to="/user/register" className="link">Register</Link>
                                <Link to="/" onClick={logoutUser} className="link">Logout</Link>
                            
                </nav>
        </header>
    );
};
export default NavBar;
