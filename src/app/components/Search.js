/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { SearchArtist } from './SearchArtist';
import { SearchAlbum} from './SearchAlbum';

export class Search extends React.Component {
    render() {
        if (!this.props.searchReducer.isShowingAlbums) {
            return(<SearchArtist
                artistsReducer={this.props.artistsReducer}
                searchArtist={this.props.searchArtist}
                showAlbums={this.props.showAlbums}
            />);
        } else {
            return(<SearchAlbum
                albumsReducer={this.props.albumsReducer}
                searchArtistsAlbums={this.props.searchArtistsAlbums}
                artistId={this.props.artistId}
                searchReducer={this.props.searchReducer}
                showAlbums={this.props.showAlbums}
                likedAlbumsIds={this.props.likedAlbumsIds}
                likeAlbum={this.props.likeAlbum} dislikeAlbum={this.props.dislikeAlbum}
            />);
        }
    }
}


Search.PropTypes = {
    searchArtist: PropTypes.func
};