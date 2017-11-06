/* eslint-disable react/prop-types */
import React from 'react';

export class SearchAlbumItem extends React.Component {
    render() {
        let toggleLike;
        if(this.props.likedAlbumsIds.includes(this.props.albumId)) {
            toggleLike = {func: this.props.dislikeAlbum, text: '♥'};
        } else {
            toggleLike = {func: this.props.likeAlbum, text: '♡'};
        }
        return (
            <li>
                {this.props.albumName}
                <a href='' onClick={(e) => {
                    e.preventDefault();
                    toggleLike.func(this.props.albumId);
                }}>{toggleLike.text}</a>
            </li>
        );
    }
}