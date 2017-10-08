/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

export const Search = (props) => {
    return (
        <div>
            <h1>SEARCH COMPONENT</h1>
            <button onClick={() => props.searchArtist()}>search</button>
            <ul>
                {props.artists ? (
                    props.artists.results.map(artist => <li key={artist.artistId}>{artist.artistName}</li>)
                ) : (
                    <p>no results</p>
                )}
            </ul>
        </div>
    );
};

Search.PropTypes = {
    searchArtist: PropTypes.func
};