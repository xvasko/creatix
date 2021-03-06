/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { Div } from './AlbumDetails.styles';

export class AlbumDetails extends React.Component {
    render() {

        return (
            <Div>
                <img src={this.props.albumDetails.artworkUrl100} alt="album_cover"/>
                <br/><br/>
                <Link to={''} onClick={() => {
                    this.props.dislikeAlbum(this.props.albumDetails.collectionId);
                    this.props.getLikedAlbums(JSON.parse(localStorage.getItem('likedAlbumsIds')));
                    this.props.hideAlbumDetails();
                }}>dislike</Link>
                <br/><br/>
                <Link to={''} onClick={() => this.props.hideAlbumDetails()}>back</Link>
            </Div>
        );
    }
}