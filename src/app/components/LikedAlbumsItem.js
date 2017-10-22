/* eslint-disable react/prop-types */
import React from 'react';

export class LikedAlbumsItem extends React.Component {
    render() {
        return (
            <li>
                <p><strong>{this.props.albumName}</strong> {this.props.artistName} <a href="#">{'see'}</a></p>
            </li>
        );
    }
}