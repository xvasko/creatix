/* eslint-disable react/prop-types */
import React from 'react';

export class Artist extends React.Component {
    componentWillMount() {
        this.props.searchArtistsAlbums(this.props.match.params.artistId);
    }

    render() {
        return (
            <div>
                <h1>{this.props.albums ? this.props.albums.results[0].artistName : null}</h1>
                <p>ID: {this.props.match.params.artistId}</p>
                <ul>
                    {this.props.albums ? (
                        this.props.albums.results.filter(album => album.collectionId).map((album) =>
                            <li key={album.collectionId}>
                                {album.collectionName}
                            </li>)
                    ) : (<p>no albums...</p>)}
                </ul>
            </div>
        );
    }
}