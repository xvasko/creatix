/* eslint-disable react/prop-types */
import React from 'react';

export class AlbumDetails extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.albumDetails.artworkUrl60} alt="album_cover"/>
                <br/><br/>
                <a href='#' onClick={() => this.props.hideAlbumDetails()}>back</a>
            </div>
        );
    }
}