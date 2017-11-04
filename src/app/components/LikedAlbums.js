/* eslint-disable react/prop-types */
import React from 'react';
import { LikedAlbumsItem } from './LikedAlbumsItem';
import { AlbumDetails } from './AlbumDetails';
import { Ul } from './LikedAlbums.styles';

export class LikedAlbums extends React.Component {
    componentWillMount() {
        this.props.getLikedAlbums(JSON.parse(localStorage.getItem('likedAlbumsIds')));
    }

    render() {
        let likedAlbums = this.props.likedAlbumsReducer.likedAlbumsIds.length > 0 && this.props.albumsReducer.fetched ? this.props.albumsReducer.albums.results.map((likedAlbum) => {
            return (
                <LikedAlbumsItem
                    key={likedAlbum.collectionId}
                    albumId={likedAlbum.collectionId}
                    albumName={likedAlbum.collectionName}
                    artistName={likedAlbum.artistName}
                    albumCover={likedAlbum.artworkUrl60}
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
                        dislikeAlbum={this.props.dislikeAlbum}
                        getLikedAlbums={this.props.getLikedAlbums}
                    />
                );
            } else {
                return (

                    <Ul>
                        {likedAlbums}
                    </Ul>

                );
            }
        }
    }
}