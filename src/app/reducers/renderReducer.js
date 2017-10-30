const initialState = {
    showSearchArtists: true,
    artistId: null,
    artistName: null
};

const renderReducer = (state = initialState, action) => {
    switch(action.type) {
    case 'SET_SEARCH_SHOW_ARTIST':
        state = {
            showSearchArtists: action.payload.showSearchArtists,
            artistId: action.payload.artistId,
            artistName: action.payload.artistName,
        };
        break;
    }
    return state;
};

export default renderReducer;