import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const NavBar = ({ logoutUser }) => {
    return (
        <header>
            <div>
            <img src={process.env.PUBLIC_URL + '/Title.png'} alt="Title" className="title" style={{ margin: 'auto' }}/>
                <nav>
                        <Link to="/" className="link">
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
                            to="/ingredients/recipes" className="link">
                            Recipes
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

export default NavBar;
