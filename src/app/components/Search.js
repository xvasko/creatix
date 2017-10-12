/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { SearchItem } from './SearchItem';

export class Search extends React.Component {
    render() {
        let searchItems = this.props.artists ? this.props.artists.results.map((artist) => {
            return(
                <SearchItem
                    key={artist.artistId}
                    artistId={artist.artistId}
                    artistName={artist.artistName}
                />
            );}) : (<p>no results</p>);

        return (
            <div>
                <h1>SEARCH COMPONENT</h1>
                <label>
                    <input type="text" name="name" onChange={(e) => this.props.searchArtist(e.target.value)}/>
                </label>
                <ul>
                    {searchItems}
                </ul>
            </div>
        );
    }
}


Search.PropTypes = {
    searchArtist: PropTypes.func
};