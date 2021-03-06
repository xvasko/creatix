const initialState = {
    fetching: false,
    fetched: false,
    artists: null,
    error: null,
    term: '',
};

const restApiArtistsReducer = (state = initialState, action) => {
    switch(action.type) {
    case 'FETCH_ARTISTS_START':
        state = {...state, fetching: true, term: action.payload.term};
        break;
    case 'FETCH_ARTISTS_ERROR':
        state = {...state, fetching: false, error: action.payload};
        break;
    case 'RECEIVE_ARTISTS':
        state = {
            ...state,
            fetching: false,
            fetched: true,
            artists: action.payload,
        };
        break;
    }
    return state;
};

export default restApiArtistsReducer;