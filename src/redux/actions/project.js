import API from "../../constants/API"
import G from "../../constants/Global"

export const get_project = (id, token) => {
    return (dispatch) => {
        G.getRequest(API.GET_PROJECTS + id, token)
            .then((res) => {
                console.log(res.status, 'get_project')
                // console.log(res.data.data, 'get_project')
                if (res.status == 200) {
                    dispatch({ type: 'GET_PROJECTS', payload: res.data.data })
                }
            })
    }
}
