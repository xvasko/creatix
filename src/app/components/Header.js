/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

export class Header extends React.Component {
    render() {
        return (
            <ul className="nav navbar-nav">
                <li><Link to={''} onClick={() => this.props.showLikedAlbums(true)}>Liked Albums</Link></li>
                <li>
                    <label>
                        <input type="text" name="name"
                            value={this.props.artistsReducer.term}
                            onChange={(e) => {
                                this.props.searchArtist(e.target.value);
                                this.props.showSearchArtists(true);
                                e.target.value == '' ? this.props.showLikedAlbums(true) : this.props.showLikedAlbums(false);
                            }}
                        />
                    </label>
                </li>
            </ul>
        );
    }
}