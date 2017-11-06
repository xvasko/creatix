/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

export class LikedAlbumsItem extends React.Component {
    render() {
        return (
            <Link to={this.props.artistName} onClick={() => this.props.showAlbumDetails(this.props.albumId)}>
                <li>
                    <img src={this.props.albumCover} alt="album_cover"/>
                    <span>
                        <strong>{this.props.albumName}</strong>
                        {this.props.artistName} {' '}
                    </span>
                </li>
            </Link>
        );
    }
}