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

export function getArtistsAlbums(artistId) {
    return dispatch => {
        dispatch({type: 'FETCH_ARTISTS_ALBUMS_START'});
        axios.get('https://itunes.apple.com/lookup?id=' + artistId + '&entity=album')
            .then((response) => {
                dispatch({type: 'RECEIVE_ARTISTS_ALBUMS', payload: response.data});
            })
            .catch((error) => {
                dispatch({type: 'FETCH_ARTISTS_ALBUMS_ERROR', payload: error});
            });
    };
}