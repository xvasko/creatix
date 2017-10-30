const initialState = {
    showLikedAlbums: true,
    showSearchArtists: true,
    artistId: null,
    artistName: null
};

const renderReducer = (state = initialState, action) => {
    switch(action.type) {
    case 'SET_SEARCH_SHOW_ARTIST':
        state = {
            ...state,
            showSearchArtists: action.payload.showSearchArtists,
            artistId: action.payload.artistId,
            artistName: action.payload.artistName,
        };
        break;
    case 'SET_SHOW_LIKED_ALBUMS':
        state = {
            ...state,
            showLikedAlbums: action.payload.showLikedAlbums,
        };
        break;
    }
    return state;
};

export default renderReducer;