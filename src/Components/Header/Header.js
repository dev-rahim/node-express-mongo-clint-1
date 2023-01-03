import React from 'react';
import './header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <Link to='/home'>Home</Link>
                <Link to='/users'>Users</Link>
                <Link to='/users/add'>Add Users</Link>

            </nav>
        </div>
    );
};

export default Header;