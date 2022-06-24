import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import useReactPath from '../../hooks/useReactPath';
import './Nav.scss';

const Nav = () => {
    return (
        <nav>
            <div className="logo">
                <Link to="/">B</Link>
            </div>

            <input type="checkbox" id="nav" className="hidden" />
            <label htmlFor="nav" className="nav-btn">
                <i></i>
                <i></i>
                <i></i>
            </label>
            <div className="nav-wrapper">
                <ul>
                    <li>
                        <Link className="link" to={'/experience'}>
                            Experience
                        </Link>
                    </li>
                    <li>
                        <Link to={'/projects'}>Projects</Link>
                    </li>
                    <li>
                        <Link to={'/contact'}>Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
