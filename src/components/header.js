import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const NavBar = ({ isloggedIn, logoutUser }) => {
    return (
        <header class="w-full">
            <div>
                <img src={process.env.PUBLIC_URL + '/Title.png'} alt="Title" className="title" style={{ margin: 'auto' }} />
                <nav className="flex flex-wrap justify-between items-center p-2">
                    <Link to="/" className="text-white hover:text-orange flex justify-center items-center">
                        <span className="material-symbols-outlined">
                            home
                        </span>
                    </Link>
                    <Link to="/about" className="text-white hover:text-orange flex justify-center items-center hover:underline">
                        About us
                    </Link>
                    {isloggedIn && (
                        <>
                            <Link
                                to="/ingredients" className="text-white hover:text-orange flex justify-center items-center hover:underline"
                            >
                                My Kitchen
                            </Link>
                            <Link
                                to="/ingredients/new" className="text-white hover:text-orange flex justify-center items-center hover:underline"
                            >
                                New Ingredient
                            </Link>
                            <Link
                                to="/ingredients/recipes" className="text-white hover:text-orange flex justify-center items-center hover:underline">
                                Recipes
                            </Link>

                            <Link
                                to="/"
                                onClick={logoutUser} className="text-white hover:text-orange flex justify-center items-center hover:underline"
                            >
                                <span className="material-symbols-outlined">
                                    logout
                                </span>
                            </Link>
                            </>
                    )}
                    {!isloggedIn && (
                        <>
                            <Link
                                to="/user/login" className="text-white hover:text-orange flex justify-center items-center hover:underline">
                                Sign In
                            </Link>
                            <Link
                                to="/user/register" className="text-white hover:text-orange flex justify-center items-center"
                            >
                                Register
                            </Link>
                            <Link
                                to="/"
                                onClick={logoutUser} className="text-white hover:text-orange flex justify-center items-center hover:underline"
                            >
                                <span className="material-symbols-outlined">
                                    logout
                                </span>
                            </Link>
                            </>
                    )}
                        </nav>
            </div>
        </header>
    );
};

export default NavBar;
