import React from 'react';
import { connect } from 'react-redux';
import { Header } from '../components/Header';
import { LikedAlbums } from '../components/LikedAlbums';
import { Search } from '../components/Search';
import { searchArtist } from '../actions/restApiArtistsActions';
import { searchArtistsAlbums, getLikedAlbums } from '../actions/restApiAlbumsActions';
import { showSearchArtists, showLikedAlbums } from '../actions/renderActions';
import PropTypes from 'prop-types';
import { likeAlbum, dislikeAlbum, showAlbumDetails, hideAlbumDetails } from '../actions/albumActions';
import { BrowserRouter } from 'react-router-dom';

class App extends React.Component {
    render() {
        let componentToRender;
        if (this.props.renderReducer.showLikedAlbums) {
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
                showSearchArtists={this.props.showSearchArtists}
                renderReducer={this.props.renderReducer}
                artistId={this.props.renderReducer.artistId}
                likedAlbumsIds={this.props.likedAlbumsReducer.likedAlbumsIds}
                likeAlbum={this.props.likeAlbum} dislikeAlbum={this.props.dislikeAlbum}
            />;
        }

        return (
            <BrowserRouter>
                <div>
                    <Header
                        artistsReducer={this.props.artistsReducer}
                        renderReducer={this.props.renderReducer}
                        showLikedAlbums={this.props.showLikedAlbums}
                        searchArtist={this.props.searchArtist}
                        showSearchArtists={this.props.showSearchArtists}
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
    showSearchArtists: PropTypes.func,
    showLikedAlbums: PropTypes.func,
    likeAlbum: PropTypes.func,
    dislikeAlbum: PropTypes.func,
    getLikedAlbums: PropTypes.func,
    showAlbumDetails: PropTypes.func,
    hideAlbumDetails: PropTypes.func,
    artistsReducer: PropTypes.object,
    albumsReducer: PropTypes.object,
    renderReducer: PropTypes.object,
    likedAlbumsReducer: PropTypes.object
};

const mapStateToProps = (state) => {
    return {
        artistsReducer: state.restApiArtistsReducer,
        albumsReducer: state.restApiAlbumsReducer,
        renderReducer: state.renderReducer,
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
        showSearchArtists: (isShowing, artistId, artistName) => {
            dispatch(showSearchArtists(isShowing, artistId, artistName));
        },
        showLikedAlbums: (show) => {
            dispatch(showLikedAlbums(show));
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