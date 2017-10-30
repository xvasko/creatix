import React from 'react';
import { connect } from 'react-redux';
import { Header } from '../components/Header';
import { LikedAlbums } from '../components/LikedAlbums';
import { Search } from '../components/Search';
import { searchArtist } from '../actions/restApiArtistsActions';
import { searchArtistsAlbums, getLikedAlbums } from '../actions/restApiAlbumsActions';
import { showAlbums } from '../actions/searchActions';
import PropTypes from 'prop-types';
import { likeAlbum, dislikeAlbum, showAlbumDetails, hideAlbumDetails } from '../actions/albumActions';
import { BrowserRouter } from 'react-router-dom';

class App extends React.Component {
    render() {
        let componentToRender;
        if (this.props.artistsReducer.term == '') {
            componentToRender = <LikedAlbums
                likedAlbumsReducer={this.props.likedAlbumsReducer}
                getLikedAlbums={this.props.getLikedAlbums}
                albumsReducer={this.props.albumsReducer}
                showAlbumDetails={this.props.showAlbumDetails} hideAlbumDetails={this.props.hideAlbumDetails}
                dislikeAlbum={this.props.dislikeAlbum}
            />;
        } else {
            componentToRender = <Search
                artistsReducer={this.props.artistsReducer}
                albumsReducer={this.props.albumsReducer}
                searchArtist={this.props.searchArtist}
                searchArtistsAlbums={this.props.searchArtistsAlbums}
                showAlbums={this.props.showAlbums}
                searchReducer={this.props.searchReducer}
                artistId={this.props.searchReducer.artistId}
                likedAlbumsIds={this.props.likedAlbumsReducer.likedAlbumsIds}
                likeAlbum={this.props.likeAlbum} dislikeAlbum={this.props.dislikeAlbum}
            />;
        }

        return (
            <BrowserRouter>
                <div>
                    <Header
                        artistsReducer={this.props.artistsReducer}
                        searchArtist={this.props.searchArtist}
                    />
                    {componentToRender}
                </div>
            </BrowserRouter>
        );
    }
}

App.propTypes = {
    searchArtist: PropTypes.func,
    searchArtistsAlbums: PropTypes.func,
    showAlbums: PropTypes.func,
    likeAlbum: PropTypes.func,
    dislikeAlbum: PropTypes.func,
    getLikedAlbums: PropTypes.func,
    showAlbumDetails: PropTypes.func,
    hideAlbumDetails: PropTypes.func,
    artistsReducer: PropTypes.object,
    albumsReducer: PropTypes.object,
    searchReducer: PropTypes.object,
    likedAlbumsReducer: PropTypes.object
};

const mapStateToProps = (state) => {
    return {
        artistsReducer: state.restApiArtistsReducer,
        albumsReducer: state.restApiAlbumsReducer,
        searchReducer: state.searchReducer,
        likedAlbumsReducer: state.albumReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getLikedAlbums: (likedAlbums) => {
            dispatch(getLikedAlbums(likedAlbums));
        },
        searchArtist: (term) => {
            dispatch(searchArtist(term));
        },
        searchArtistsAlbums: (artistId) => {
            dispatch(searchArtistsAlbums(artistId));
        },
        showAlbums: (isShowing, artistId, artistName) => {
            dispatch(showAlbums(isShowing, artistId, artistName));
        },
        likeAlbum: (albumId) => {
            dispatch(likeAlbum(albumId));
        },
        dislikeAlbum: (albumId) => {
            dispatch(dislikeAlbum(albumId));
        },
        showAlbumDetails: (albumId) => {
            dispatch(showAlbumDetails(albumId));
        },
        hideAlbumDetails: () => {
            dispatch(hideAlbumDetails());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);