const initialState = {
    isLoading: false,
    Tokenid: '',
    userdata: {},
}

export default user = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_USER':
            return {
                ...state,
                userdata: action.payload,
            };

        default:
            return state
    }
};
