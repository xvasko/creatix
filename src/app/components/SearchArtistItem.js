/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

export const SearchArtistItem = (props) => {
    return (
        <li>
            <Link to={'search/' + props.artistName} onClick={() => props.showArtists(false, props.artistId, props.artistName)}>
                {props.artistName}
            </Link>
        </li>
    );
};