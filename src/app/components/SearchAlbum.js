/* eslint-disable react/prop-types */
import React from 'react';
import { SearchAlbumItem } from './SearchAlbumItem';
import { Link } from 'react-router-dom';
import { Div, H2, Ul } from './SearchAlbum.styles';

export class SearchAlbum extends React.Component {
    componentWillMount() {
        this.props.searchArtistsAlbums(this.props.renderReducer.artistId);
    }

    render () {
        let searchAlbumItems = this.props.albumsReducer.albums ? this.props.albumsReducer.albums.results.filter(album => album.collectionId).map((album) => {
            return (
                <SearchAlbumItem
                    key={album.collectionId}
                    albumId={album.collectionId}
                    albumName={album.collectionName}
                    likedAlbumsIds={this.props.likedAlbumsIds}
                    likeAlbum={this.props.likeAlbum} dislikeAlbum={this.props.dislikeAlbum}
                />
            );
        }) : (<p>no albums...</p>);

        let isLoading = !this.props.albumsReducer.fetching ?
            <Div>
                <H2>{this.props.albumsReducer.albums.results[0]['artistName']}</H2>
                <Ul>{searchAlbumItems}</Ul>
                <Link to={'/'} onClick={() => this.props.showSearchArtists(true)}>back</Link>
            </Div> : <H2>Loading...</H2>;

        return (
            <div>
                {isLoading}
            </div>
        );
    }
}