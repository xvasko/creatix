import React from 'react';
import { connect } from 'react-redux';
import { Header } from '../components/Header';
import { BrowserRouter, Route } from 'react-router-dom';
import { LikedAlbums } from '../components/LikedAlbums';
import { Search } from '../components/Search';
import { searchArtist } from '../actions/restApiArtistsActions';
import { searchArtistsAlbums } from '../actions/restApiAlbumsActions';
import { showAlbums } from '../actions/searchActions';
import PropTypes from 'prop-types';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route exact path={'/'} component={LikedAlbums}/>
                    <Route path={'/likedalbums'} component={LikedAlbums}/>
                    <Route path={'/search'} render={
                        ()=><Search
                            artists={this.props.artistsReducer.artists}
                            albums={this.props.albumsReducer.albums}
                            searchArtist={this.props.searchArtist}
                            searchArtistsAlbums={this.props.searchArtistsAlbums}
                            showAlbums={this.props.showAlbums}
                            searchReducer={this.props.searchReducer}
                            artistId={this.props.searchReducer.artistId}
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
    artistsReducer: PropTypes.object,
    albumsReducer: PropTypes.object,
    searchReducer: PropTypes.object
};

const mapStateToProps = (state) => {
    return {
        artistsReducer: state.restApiArtistsReducer,
        albumsReducer: state.restApiAlbumsReducer,
        searchReducer: state.searchReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        searchArtist: (term) => {
            dispatch(searchArtist(term));
        },
        searchArtistsAlbums: (artistId) => {
            dispatch(searchArtistsAlbums(artistId));
        },
        showAlbums: (isShowing, artistId, artistName) => {
            dispatch(showAlbums(isShowing, artistId, artistName));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);