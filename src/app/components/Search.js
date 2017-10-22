/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { SearchArtist } from './SearchArtist';
import { SearchAlbum} from './SearchAlbum';

export class Search extends React.Component {
    render() {
        if (!this.props.searchReducer.isShowingAlbums) {
            return(<SearchArtist
                artists={this.props.artists}
                searchArtist={this.props.searchArtist}
                showAlbums={this.props.showAlbums}
            />);
        } else {
            return(<SearchAlbum
                albums={this.props.albums}
                searchArtistsAlbums={this.props.searchArtistsAlbums}
                artistId={this.props.artistId}
                searchReducer={this.props.searchReducer}
                showAlbums={this.props.showAlbums}
            />);
        }
    }
}


Search.PropTypes = {
    searchArtist: PropTypes.func
};