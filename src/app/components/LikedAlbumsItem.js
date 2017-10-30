/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

export class LikedAlbumsItem extends React.Component {
    render() {
        return (
            <li>
                <p><img src={this.props.albumCover} alt="album_cover"/> {' '}
                    <strong>{this.props.albumName}</strong> {' '}
                    {this.props.artistName} {' '}
                    <Link to={this.props.artistName} onClick={() => this.props.showAlbumDetails(this.props.albumId)}>{'see'}</Link>
                </p>
            </li>
        );
    }
}