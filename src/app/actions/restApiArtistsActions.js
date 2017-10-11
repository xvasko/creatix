import axios from 'axios';

export function searchArtist(term) {
    return dispatch => {
        dispatch({type: 'FETCH_ARTISTS_START'});
        axios.get('https://itunes.apple.com/search?term=' + term + '&entity=musicArtist')
            .then((response) => {
                dispatch({type: 'RECEIVE_ARTISTS', payload: response.data});
            })
            .catch((error) => {
                dispatch({type: 'FETCH_ARTISTS_ERROR', payload: error});
            });
    };
}