/* eslint-disable react/prop-types */
import React from 'react';
import { SearchArtistItem } from './SearchArtistItem';
import { Ul } from './SearchArtist.styles';

export class SearchArtist extends React.Component {
    render() {
        let searchArtistItems = this.props.artistsReducer.artists ? this.props.artistsReducer.artists.results.map((artist) => {
            return (
                <SearchArtistItem
                    key={artist.artistId}
                    artistId={artist.artistId}
                    artistName={artist.artistName}
                    showSearchArtists={this.props.showSearchArtists}
                />
            );
        }) : (<p>no artists...</p>);

        return (
            <Ul>
                {searchArtistItems}
            </Ul>
        );
    }
}