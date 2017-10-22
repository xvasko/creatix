/* eslint-disable react/prop-types */
import React from 'react';
import { SearchArtistItem } from './SearchArtistItem';

export class SearchArtist extends React.Component {
    render() {
        let searchArtistItems = this.props.artists ? this.props.artists.results.map((artist) => {
            return (
                <SearchArtistItem
                    key={artist.artistId}
                    artistId={artist.artistId}
                    artistName={artist.artistName}
                    showAlbums={this.props.showAlbums}
                />
            );
        }) : (<p>no artists...</p>);

        return (
            <div>
                <h1>SEARCH ARTIST COMPONENT</h1>
                <label>
                    <input type="text" name="name" onChange={(e) => this.props.searchArtist(e.target.value)}/>
                </label>
                <ul>
                    {searchArtistItems}
                </ul>
            </div>
        );
    }
}