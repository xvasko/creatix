import axios from 'axios';

export function searchArtistsAlbums(artistId) {
    return dispatch => {
        dispatch({type: 'FETCH_ALBUMS_START'});
        axios.get('https://itunes.apple.com/lookup?id=' + artistId + '&entity=album')
            .then((response) => {
                dispatch({type: 'RECEIVE_ALBUMS', payload: response.data});
            })
            .catch((error) => {
                dispatch({type: 'FETCH_ALBUMS_ERROR', payload: error});
            });
    };
}