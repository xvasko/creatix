/* eslint-disable react/prop-types */
import React from 'react';

export const SearchAlbumItem = (props) => {
    return (
        <li>
            {props.albumId}: {props.albumName}
        </li>
    );
};