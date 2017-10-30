/* eslint-disable react/prop-types */
import React from 'react';
import { SearchAlbumItem } from './SearchAlbumItem';
import { Link } from 'react-router-dom';

export class SearchAlbum extends React.Component {
    componentWillMount() {
        this.props.searchArtistsAlbums(this.props.renderReducer.artistId);
    }

    render () {
        let searchAlbumItems = this.props.albumsReducer.albums ? this.props.albumsReducer.albums.results.filter(album => album.collectionId).map((album) => {
            return (
                <SearchAlbumItem
                    key={album.collectionId}
                    albumId={album.collectionId}
                    albumName={album.collectionName}
                    likedAlbumsIds={this.props.likedAlbumsIds}
                    likeAlbum={this.props.likeAlbum} dislikeAlbum={this.props.dislikeAlbum}
                />
            );
        }) : (<p>no albums...</p>);

        let isLoading = !this.props.albumsReducer.fetching ? <ul>{searchAlbumItems}</ul> : <h2>Loading...</h2>;

        return (
            <div>
                <h1>SEARCH ALBUM COMPONENT</h1>
                <ul>
                    {isLoading}
                </ul>
                <Link to={'/'} onClick={() => this.props.showSearchArtists(true)}>back</Link>
            </div>
        );
    }
}