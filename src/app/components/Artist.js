/* eslint-disable react/prop-types */
import React from 'react';
import { ArtistItem } from './ArtistItem';

export class Artist extends React.Component {
    componentWillMount() {
        this.props.searchArtistsAlbums(this.props.match.params.artistId);
    }

    render() {
        let artistsItems = this.props.albums ? this.props.albums.results.filter(album => album.collectionId).map((album) => {
            return(
                <ArtistItem
                    key={album.collectionId}
                    albumName={album.collectionName}
                />
            );}) : (<p>no albums...</p>);

        return (
            <div>
                <h1>{this.props.albums ? this.props.albums.results[0].artistName : null}</h1>
                <p>ID: {this.props.match.params.artistId}</p>
                <ul>
                    {artistsItems}
                </ul>
            </div>
        );
    }
}