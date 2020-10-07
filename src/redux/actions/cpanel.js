import API from "../../constants/API"
import G from "../../constants/Global"
import axios from "axios"

export const get_cpanel = (id, token) => {
    return (dispatch) => {
        axios.get(API.CPANEL_USER_DETAIL + id, { headers: { 'Authorization ': 'Bearer ' + token } })
            .then((res) => {
                console.log(res.status, 'cpanel status1')
                console.log(res.data.data, 'cpanel status1')
                if (res.status === 200) {
                    if (res.data.data) {
                        axios.get(API.CPANEL_DOMAIN_DETAIL + res.data.data[0].cpanel_username, { headers: { 'Authorization ': 'Bearer ' + token } })
                            .then((res1) => {
                                // console.log(res1.data.data, 're1111111111')
                                dispatch({ type: 'CPANEL_', payload: { domain: res1.data.data, details: res.data.data[0] } })
                            })
                            .catch((err) => {
                                console.log(err, 'err')
                            })
                    }
                }
            })
            .catch((err) => {
                console.log(err, 'err')
            })
    }
}
