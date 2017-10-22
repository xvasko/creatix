const initialState = {
    isShowingAlbums: false,
    artistId: null,
    artistName: null
};

const searchReducer = (state = initialState, action) => {
    switch(action.type) {
    case 'SET_SHOWING_ARTIST':
        state = {
            ...state,
            isShowingAlbums: action.payload.isShowingAlbums,
            artistId: action.payload.artistId,
            artistName: action.payload.artistName,
        };
        break;
    }
    return state;
};

export default searchReducer;