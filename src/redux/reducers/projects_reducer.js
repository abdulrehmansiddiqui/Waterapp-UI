const initialState = {
    Loading: true,
    projectdata: [],
    tasksdata: [],
}

export default project = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PROJECTS':
            var temp = []
            if (action.payload.tasks.length > 0) {
                action.payload.tasks.map(v => {
                    v.selected = false
                    temp.push(v)
                })
            }
            return {
                ...state,
                projectdata: action.payload,
                tasksdata: temp,
                Loading: false
            };

        default:
            return state
    }
};
