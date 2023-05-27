import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ logoutUser }) => {

    return (
        <header>
            <div>
                <nav>
                        <Link to="/" className="link">
                            Logo
                        </Link>
                        <Link
                            to="/" className="link"
                        >
                            Home
                        </Link>
                        <Link
                            to="/ingredients" className="link"
                        >
                            My Kitchen
                        </Link>
                        <Link
                            to="/ingredients/new" className="link"
                        >
                            New
                        </Link>
                        <Link
                            to="/user/login" className="link"

                        >
                            Sign In
                        </Link>
                        <Link
                            to="/user/register" className="link"
                        >
                            Register
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

export default NavBar;
