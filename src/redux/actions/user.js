import API from "../../constants/API"
import G from "../../constants/Global"

export const get_user = (token) => {
    return (dispatch) => {
        G.getRequest(API.USER_DATA, token)
            .then((res) => {
                // console.log(res.data)
                console.log(res.status, 'get_user')
                if (res.status == 200) {
                    dispatch({ type: 'GET_USER', payload: res.data })
                }
            })
    }
}
