/* eslint-disable react/prop-types */
import React from 'react';

export class LikedAlbumsItem extends React.Component {
    render() {
        return (
            <li>
                <p>
                    <strong>{this.props.albumName}</strong> {' '}
                    {this.props.artistName} {' '}
                    <a href="#" onClick={() => this.props.showAlbumDetails(this.props.albumId)}>{'see'}</a>
                </p>
            </li>
        );
    }
}