import API from "../../constants/API"
import G from "../../constants/Global"

export const get_analytic = (token) => {
    return (dispatch) => {
        const data = { days: 4 }
        G.postRequest(API.TOTAL_VISITOR_AND_PAGEVIEW, data, token)
            .then((res) => {
                console.log(res.status, 'analytic')
                // console.log(res, 'analytic')
                if (res.status == 200) {
                    dispatch({ type: 'GET_ANALYTIC', payload: res.data })
                } else {
                    dispatch({ type: 'GET_ANALYTIC', payload: [] })
                }
            })
    }
}
export const get_analytic_device = (token) => {
    return (dispatch) => {
        G.postRequest(API.DEVICE_CATEGORY, null, token)
            .then((res) => {
                console.log(res.status, 'analytic device')
                // console.log(res.data, 'analytic  device')
                if (res.status == 200) {
                    dispatch({ type: 'GET_ANALYTIC_DEVICE', payload: res.data })
                } else {
                    dispatch({ type: 'GET_ANALYTIC_DEVICE', payload: [] })
                }
            })
    }
}
export const get_analytic_total_active_user = (token) => {
    return (dispatch) => {
        G.postRequest(API.TOTAL_ACTIVE_USERS, null, token)
            .then((res) => {
                console.log(res.status, 'analytic  ACTIVE USERS')
                // console.log(res.data, 'analytic  ACTIVE USERS')
                if (res.status == 200) {
                    dispatch({ type: 'GET_TOTAL_ACTIVE_USERS', payload: res.data.users })
                } else {
                    dispatch({ type: 'GET_TOTAL_ACTIVE_USERS', payload: [] })
                }
            })
    }
}
export const get_analytic_page_views = (token) => {
    return (dispatch) => {
        const data = { days: 7, maxResults: 20 }
        G.postRequest(API.PAGE_VIEWS, null, token)
            .then((res) => {
                console.log(res.status, 'analytic  PAGE Views')
                // console.log(res.data, 'analytic  PAGE Views ')
                if (res.status == 200) {
                    dispatch({ type: 'GET_PAGE_VIEWS', payload: res.data })
                } else {
                    dispatch({ type: 'GET_PAGE_VIEWS', payload: [] })
                }
            })
    }
}
export const get_analytic_top_referrers = (token) => {
    return (dispatch) => {
        G.postRequest(API.TOP_REFERRERS, null, token)
            .then((res) => {
                console.log(res.status, 'analytic Socail Record')
                // console.log(res.data, 'analytic Socail Record')
                if (res.status == 200) {
                    dispatch({ type: 'GET_SOCIAL_RECORDS', payload: res.data })
                } else {
                    dispatch({ type: 'GET_SOCIAL_RECORDS', payload: [] })
                }
            })
    }
}