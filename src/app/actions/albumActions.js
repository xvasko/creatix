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