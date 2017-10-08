import React from 'react';
import { connect } from 'react-redux';
import { Header } from '../components/Header';
import { BrowserRouter, Route } from 'react-router-dom';
import { LikedAlbums } from '../components/LikedAlbums';
import { Search } from '../components/Search';
import { searchArtist } from '../actions/apiActions';
import PropTypes from 'prop-types';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route exact path={'/'} component={LikedAlbums}/>
                    <Route path={'/likedalbums'} component={LikedAlbums}/>
                    <Route path={'/search'} render={()=><Search searchArtist={this.props.searchArtist}/>}/>
                </div>
            </BrowserRouter>
        );
    }
}

App.propTypes = {
    searchArtist: PropTypes.func,
};

const mapStateToProps = (state) => {
    return {
        api: state.apiReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        searchArtist: () => {
            dispatch(searchArtist('Skrillex'));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);