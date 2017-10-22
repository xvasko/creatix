/* eslint-disable react/prop-types */
import React from 'react';

export const SearchArtistItem = (props) => {
    return (
        <li>
            <a href="#" onClick={() => props.showAlbums(true, props.artistId, props.artistName)}>
                {props.artistName}
            </a>
        </li>
    );
};