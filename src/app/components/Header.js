/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer } from './Header.styles';

export class Header extends React.Component {
    render() {
        return (
            <HeaderContainer>
                <Link to={''} onClick={() => {
                    this.props.showLikedAlbums(true);
                    this.props.hideAlbumDetails();
                }}>Liked Albums</Link>
                <label>
                    <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
                    <input type="text" name="name" placeholder="search"
                        value={this.props.artistsReducer.term}
                        onChange={(e) => {
                            this.props.searchArtist(e.target.value);
                            this.props.showSearchArtists(true);
                            e.target.value == '' ? this.props.showLikedAlbums(true) : this.props.showLikedAlbums(false);
                        }}
                    />
                </label>
            </HeaderContainer>
        );
    }
}