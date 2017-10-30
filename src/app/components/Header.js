/* eslint-disable react/prop-types */
import React from 'react';

export class Header extends React.Component {
    render() {
        return (
            <ul className="nav navbar-nav">
                <li><a href='/' onClick={() => this.props.artistsReducer.term = ''}>Liked Albums</a></li>
                <li>
                    <label>
                        <input type="text" name="name"
                            value={this.props.artistsReducer.term}
                            onChange={(e) => this.props.searchArtist(e.target.value)}
                        />
                    </label>
                </li>
            </ul>
        );
    }
}