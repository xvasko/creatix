/* eslint-disable react/prop-types */
import React from 'react';
import Link from 'react-router-dom/es/Link';

export const SearchItem = (props) => {
    return (
        <li>
            <Link to={`/artist/${props.artistId}`}>{props.artistName}</Link>
        </li>
    );
};