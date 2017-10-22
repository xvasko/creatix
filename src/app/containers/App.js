import React from 'react';
import { connect } from 'react-redux';
import { Header } from '../components/Header';
import { BrowserRouter, Route } from 'react-router-dom';
import { LikedAlbums } from '../components/LikedAlbums';
import { Search } from '../components/Search';
import { searchArtist } from '../actions/restApiArtistsActions';
import { searchArtistsAlbums, getLikedAlbums } from '../actions/restApiAlbumsActions';
import { showAlbums } from '../actions/searchActions';
import PropTypes from 'prop-types';
import { likeAlbum, dislikeAlbum } from '../actions/albumActions';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header/>
                    {/*<Route exact path={'/'} component={LikedAlbums}/>*/}
                    <Route path={'/likedalbums'} render={
                        ()=><LikedAlbums
                            likedAlbumsIds={this.props.likedAlbumsReducer.likedAlbumsIds}
                            getLikedAlbums={this.props.getLikedAlbums}
                            albums={this.props.albumsReducer.albums}
                        />}
                    />
                    <Route path={'/search'} render={
                        ()=><Search
                            artists={this.props.artistsReducer.artists}
                            albums={this.props.albumsReducer.albums}
                            searchArtist={this.props.searchArtist}
                            searchArtistsAlbums={this.props.searchArtistsAlbums}
                            showAlbums={this.props.showAlbums}
                            searchReducer={this.props.searchReducer}
                            artistId={this.props.searchReducer.artistId}
                            likedAlbumsIds={this.props.likedAlbumsReducer.likedAlbumsIds}
                            likeAlbum={this.props.likeAlbum} dislikeAlbum={this.props.dislikeAlbum}
                        />
                    }/>
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
        likedAlbumsReducer: state.likedAlbumsReducer
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

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);