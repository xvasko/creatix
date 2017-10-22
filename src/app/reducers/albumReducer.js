const initialState = {
    likedAlbumsIds: []
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
    }
    return state;
};

export default albumReducer;