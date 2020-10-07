const initialState = {
    Loading: true,
    analyticdata: [],

    date: [],
    pageViews: [],
    visitors: [],

    deviceCateogry: [],
    totalActiveUsers: 0,

    pageviewsrecords: [],
    loadingpageviewsrecords: true,

    socailrecord: [],
    loadingsocailrecord: true,
    sumsocailrecord: 0,

}

import moment from 'moment'

export default analytic = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ANALYTIC':
            // ////for the line chart
            var date1 = []
            var pageViews1 = []
            var visitors1 = []
            // console.log(action.payload.length)
            if (action.payload.length) {
                action.payload.map((item, k) => {
                    let newdate = moment(item.date).format('DD MMM')
                    date1.push(newdate)
                    pageViews1.push(item.pageViews)
                    visitors1.push(item.visitors)
                })
                return {
                    ...state,
                    analyticdata: action.payload,
                    Loading: false,

                    date: date1,
                    pageViews: pageViews1,
                    visitors: visitors1,
                }
            } else {
                return {
                    ...state,
                    analyticdata: action.payload,
                    Loading: false,

                    date: date1,
                    pageViews: pageViews1,
                    visitors: visitors1,
                }
            }

        case 'GET_ANALYTIC_DEVICE':
            return {
                ...state,
                deviceCateogry: action.payload,
            }
        case 'GET_TOTAL_ACTIVE_USERS':
            return {
                ...state,
                totalActiveUsers: action.payload,
            }
        case 'GET_PAGE_VIEWS':
            return {
                ...state,
                pageviewsrecords: action.payload,
                loadingpageviewsrecords: false
            }
        case 'GET_SOCIAL_RECORDS':
            // var sum = action.payload.reduce(function (a, b) { return a.pageViews + b.pageViews; }, 0);
            var temp = []
            if (action.payload.length > 0) {
                action.payload.map(v => {
                    temp.push(v.pageViews)
                })
            }
            var sum = temp.reduce(function (a, b) { return a + b; }, 0);
            return {
                ...state,
                sumsocailrecord: sum,
                socailrecord: action.payload,
                loadingsocailrecord: false
            }

        default:
            return state
    }
};
