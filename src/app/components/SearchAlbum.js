/* eslint-disable react/prop-types */
import React from 'react';
import { SearchAlbumItem } from './SearchAlbumItem';

export class SearchAlbum extends React.Component {
    componentWillMount() {
        this.props.searchArtistsAlbums(this.props.searchReducer.artistId);
    }

    render () {
        let searchAlbumItems = this.props.albums ? this.props.albums.results.filter(album => album.collectionId).map((album) => {
            return (
                <SearchAlbumItem
                    key={album.collectionId}
                    albumId={album.collectionId}
                    albumName={album.collectionName}
                />
            );
        }) : (<p>no albums...</p>);

        return (
            <div>
                <h1>SEARCH ALBUM COMPONENT</h1>
                <ul>
                    {searchAlbumItems}
                </ul>
                <a href='#' onClick={() => this.props.showAlbums(false)}>back</a>
            </div>
        );
    }
}