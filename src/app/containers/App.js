import React from 'react';
import { connect } from 'react-redux';
import { Header } from '../components/Header';
import { BrowserRouter, Route } from 'react-router-dom';
import { LikedAlbums } from '../components/LikedAlbums';
import { Search } from '../components/Search';
import { searchArtist } from '../actions/restApiArtistsActions';
import { searchArtistsAlbums } from '../actions/restApiAlbumsActions';
import PropTypes from 'prop-types';
import { Artist } from '../components/Artist';

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
                            searchArtist={this.props.searchArtist}
                            artists={this.props.artistsReducer.artists}
                            albums={this.props.albumsReducer.albums}
                        />
                    }/>
                    <Route path={'/artist/:artistId'} render={
                        (props)=><Artist
                            {...props}
                            searchArtistsAlbums={this.props.searchArtistsAlbums}
                            albums={this.props.albumsReducer.albums}
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
    artistsReducer: PropTypes.object,
    albumsReducer: PropTypes.object
};

const mapStateToProps = (state) => {
    return {
        artistsReducer: state.restApiArtistsReducer,
        albumsReducer: state.restApiAlbumsReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        searchArtist: (term) => {
            dispatch(searchArtist(term));
        },
        searchArtistsAlbums: (artistId) => {
            dispatch(searchArtistsAlbums(artistId));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);