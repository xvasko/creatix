/* eslint-disable react/prop-types */
import React from 'react';
import { LikedAlbumsItem } from './LikedAlbumsItem';
import { AlbumDetails } from './AlbumDetails';

export class LikedAlbums extends React.Component {
    componentWillMount() {
        this.props.getLikedAlbums(this.props.likedAlbumsReducer.likedAlbumsIds);
    }

    render() {
        let likedAlbums = this.props.likedAlbumsReducer.likedAlbumsIds.length > 0 ? this.props.albumsReducer.albums.results.map((likedAlbum) => {
            return (
                <LikedAlbumsItem
                    key={likedAlbum.collectionId}
                    albumId={likedAlbum.collectionId}
                    albumName={likedAlbum.collectionName}
                    artistName={likedAlbum.artistName}
                    showAlbumDetails={this.props.showAlbumDetails}
                />
            );
        }) : (<p>you have no liked albums...</p>);

        if(this.props.albumsReducer.fetching) {
            return (<h2>Loading...</h2>);
        } else {
            if(this.props.likedAlbumsReducer.showAlbumDetails) {
                return (
                    <AlbumDetails
                        albumDetails={this.props.albumsReducer.albums.results.filter(album => album.collectionId == this.props.likedAlbumsReducer.showAlbumDetails)[0]}
                        hideAlbumDetails={this.props.hideAlbumDetails}
                    />
                );
            } else {
                return (
                    <div>
                        <h1>LIKED ALBUMS COMPONENT</h1>
                        <ul>
                            {likedAlbums}
                        </ul>
                    </div>
                );
            }
        }
    }
}