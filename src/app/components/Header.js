import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <ul className="nav navbar-nav">
            <li><Link to={'/likedalbums'}>Liked Albums</Link></li>
            <li><Link to={'/search'}>Search</Link></li>
        </ul>
    );
};