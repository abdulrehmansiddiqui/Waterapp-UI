const initialState = {
    loading: true,
    details: null,
    domain: null,
    cpanel_link: '',
    cpanel_link_lodain: true,
}

export default cpanel = (state = initialState, action) => {
    switch (action.type) {
        case 'CPANEL_':
            return {
                ...state,
                details: action.payload.details,
                domain: action.payload.domain,
                loading: false,
            };
        case 'CPANEL_LINK':
            return {
                ...state,
                cpanel_link: action.payload,
                cpanel_link_lodain: false,
            };

        default:
            return state
    }
};
