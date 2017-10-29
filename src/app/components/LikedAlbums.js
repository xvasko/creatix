/* eslint-disable react/prop-types */
import React from 'react';
import { LikedAlbumsItem } from './LikedAlbumsItem';

export class LikedAlbums extends React.Component {
    componentWillMount() {
        this.props.getLikedAlbums(this.props.likedAlbumsIds);
    }

    render() {
        let likedAlbums = this.props.likedAlbumsIds.length > 0 ? this.props.albumsReducer.albums.results.map((likedAlbum) => {
            return (
                <LikedAlbumsItem
                    key={likedAlbum.collectionId}
                    albumName={likedAlbum.collectionName}
                    artistName={likedAlbum.artistName}
                />
            );
        }) : (<p>you have no liked albums...</p>);
        if(this.props.albumsReducer.fetching) {
            return (<h2>Loading...</h2>);
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