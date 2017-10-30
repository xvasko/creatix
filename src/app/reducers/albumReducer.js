const initialState = {
    likedAlbumsIds: localStorage.getItem('likedAlbumsIds') ? JSON.parse(localStorage.getItem('likedAlbumsIds')) : [],
    showAlbumDetails: null,
};

const albumReducer = (state = initialState, action) => {
    switch(action.type) {
    case 'LIKE_ALBUM':
        state = {
            likedAlbumsIds: [...state.likedAlbumsIds, action.payload.albumId]
        };
        break;
    case 'DISLIKE_ALBUM':
        state = {
            likedAlbumsIds: [...state.likedAlbumsIds]
        };
        state.likedAlbumsIds.splice(state.likedAlbumsIds.indexOf(action.payload.albumId), 1);
        break;
    case 'SHOW_ALBUM_DETAILS':
        state = {
            ...state,
            showAlbumDetails: action.payload.albumId
        };
        break;
    case 'HIDE_ALBUM_DETAILS':
        state = {
            ...state,
            showAlbumDetails: null
        };
        break;
    }
    return state;
};

export default albumReducer;