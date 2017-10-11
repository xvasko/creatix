const initialState = {
    fetching: false,
    fetched: false,
    albums: null,
    error: null
};

const restApiAlbumsReducer = (state = initialState, action) => {
    switch(action.type) {
    case 'FETCH_ALBUMS_START':
        state = {...state, fetching: true};
        break;
    case 'FETCH_ALBUMS_ERROR':
        state = {...state, fetching: false, error: action.payload};
        break;
    case 'RECEIVE_ALBUMS':
        state = {
            ...state,
            fetching: false,
            fetched: true,
            albums: action.payload
        };
        break;
    }
    return state;
};

export default restApiAlbumsReducer;