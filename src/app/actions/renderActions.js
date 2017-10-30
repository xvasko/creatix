export function showArtists(showSearchArtists, artistId, artistName) {
    return {
        type: 'SET_SEARCH_SHOW_ARTIST',
        payload: {
            showSearchArtists: showSearchArtists,
            artistId: artistId,
            artistName: artistName
        }
    };
}