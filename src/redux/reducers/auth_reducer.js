const initialState = {
    id1: '',
    id2: '',
    auth: '',
    expires_at: '',
}

export default auth = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_AUTH':
            return {
                id1: action.payload.user.id,
                id2: action.payload.user._id,
                auth: action.payload.access_token,
                expires_at: action.payload.expires_at,
            };
        case 'DESTORY_AUTH':
            return {
                auth: '',
                expires_at: '',
            };

        default:
            return state
    }
};
