import React from 'react';
import { connect } from 'react-redux';
import { Header } from '../components/Header';
import { BrowserRouter, Route } from 'react-router-dom';
import { LikedAlbums } from '../components/LikedAlbums';
import { Search } from '../components/search/Search';
import { searchArtist, getArtistsAlbums } from '../actions/apiActions';
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
                    <Route path={'/search'} render={()=><Search searchArtist={this.props.searchArtist} artists={this.props.api.artists}/>}/>
                    <Route path={'/artist/:artistId'} render={props=><Artist {...props} getArtistsAlbums={this.props.getArtistsAlbums} albums={this.props.api.albums} />}/>
                </div>
            </BrowserRouter>
        );
    }
}

App.propTypes = {
    searchArtist: PropTypes.func,
    getArtistsAlbums: PropTypes.func,
    api: PropTypes.object
};

const mapStateToProps = (state) => {
    return {
        api: state.apiReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        searchArtist: (term) => {
            dispatch(searchArtist(term));
        },
        getArtistsAlbums: (artistId) => {
            dispatch(getArtistsAlbums(artistId));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);