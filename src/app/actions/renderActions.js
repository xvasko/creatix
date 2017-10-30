export function showSearchArtists(showSearchArtists, artistId, artistName) {
    return {
        type: 'SET_SEARCH_SHOW_ARTIST',
        payload: {
            showSearchArtists: showSearchArtists,
            artistId: artistId,
            artistName: artistName
        }
    };
}

export function showLikedAlbums(showLikedAlbums) {
    return {
        type: 'SET_SHOW_LIKED_ALBUMS',
        payload: {
            showLikedAlbums: showLikedAlbums,
        }
    };
}