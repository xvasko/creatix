export function likeAlbum(albumId) {
    return {
        type: 'LIKE_ALBUM',
        payload: {
            albumId: albumId
        }
    };
}

export function dislikeAlbum(albumId) {
    return {
        type: 'DISLIKE_ALBUM',
        payload: {
            albumId: albumId
        }
    };
}

export function showAlbumDetails(albumId) {
    return {
        type: 'SHOW_ALBUM_DETAILS',
        payload: {
            albumId: albumId
        }
    };
}

export function hideAlbumDetails() {
    return {
        type: 'HIDE_ALBUM_DETAILS',
    };
}