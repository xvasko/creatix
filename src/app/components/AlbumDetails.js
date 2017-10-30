/* eslint-disable react/prop-types */
import React from 'react';

export class AlbumDetails extends React.Component {
    render() {

        return (
            <div>
                <img src={this.props.albumDetails.artworkUrl100} alt="album_cover"/>
                <br/><br/>
                <a href="#" onClick={() => {
                    this.props.dislikeAlbum(this.props.albumDetails.collectionId);
                    this.props.getLikedAlbums(JSON.parse(localStorage.getItem('likedAlbumsIds')));
                    this.props.hideAlbumDetails();
                }}>dislike</a>
                <br/><br/>
                <a href='#' onClick={() => this.props.hideAlbumDetails()}>back</a>
            </div>
        );
    }
}