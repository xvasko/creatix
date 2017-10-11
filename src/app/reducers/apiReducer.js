const initialState = {
    fetching: false,
    fetched: false,
    artists: null,
    albums: null,
    error: null
};

const apiReducer = (state = initialState, action) => {
    switch(action.type) {
    case 'FETCH_ARTISTS_START':
        state = {...state, fetching: true};
        break;
    case 'FETCH_ARTISTS_ERROR':
        state = {...state, fetching: false, error: action.payload};
        break;
    case 'RECEIVE_ARTISTS':
        state = {
            ...state,
            fetching: false,
            fetched: true,
            artists: action.payload
        };
        break;
    case 'FETCH_ARTISTS_ALBUMS_START':
        state = {...state, fetching: true};
        break;
    case 'FETCH_ARTISTS_ALBUMS_ERROR':
        state = {...state, fetching: false, error: action.payload};
        break;
    case 'RECEIVE_ARTISTS_ALBUMS':
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

export default apiReducer;