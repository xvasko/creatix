export function showAlbums(isShowing, artistId, artistName) {
    return {
        type: 'SET_SHOWING_ARTIST',
        payload: {
            isShowingAlbums: isShowing,
            artistId: artistId,
            artistName: artistName
        }
    };
}