/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

export class Search extends React.Component {
    render() {
        return (
            <div>
                <h1>SEARCH COMPONENT</h1>
                <label>
                    <input type="text" name="name" onChange={(e) => this.props.searchArtist(e.target.value)}/>
                </label>
                <ul>
                    {this.props.artists ? (
                        this.props.artists.results.map(artist => <li key={artist.artistId}>{artist.artistName}</li>)
                    ) : (
                        <p>no results</p>
                    )}
                </ul>
            </div>
        );
    }
}


Search.PropTypes = {
    searchArtist: PropTypes.func
};