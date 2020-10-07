const initialState = {
    Loading: true,
    faqdata: [],
}

export default faq = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_FAQ':
            return {
                ...state,
                faqdata: action.payload,
                Loading: false
            };

        default:
            return state
    }
};
