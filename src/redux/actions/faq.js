import API from "../../constants/API"
import G from "../../constants/Global"

export const get_faq = (token) => {
    return (dispatch) => {
        G.getRequest(API.GET_FAQ, token)
            .then((res) => {
                // console.log(res.data)
                console.log(res.status, "FAQ")
                if (res.status == 200) {
                    dispatch({ type: 'UPDATE_FAQ', payload: res.data.data })
                }
            })
    }
}