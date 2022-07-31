export const getComments = comments =>({
    type: 'GET_COMMENTS',
    comments
})

export const postComment = comment => ({
    type: 'POST_COMMENT',
    comment,
});

export const setError = error => ({
    type: 'SET_ERROR',
    error,
});