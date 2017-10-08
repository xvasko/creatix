/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

export const Search = (props) => {
    return (
        <div>
            <h1>SEARCH COMPONENT</h1>
            <button onClick={() => props.searchArtist()}>search</button>
        </div>
    );
};

Search.PropTypes = {
    searchArtist: PropTypes.func
};