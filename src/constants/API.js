class API {

    // static BASE_URL = 'http://getfastdelivery.com/stadium/public/api'
    static BASE_URL = 'https://box.boxhigher.com/api/client/public/api'

    static IMAGE_URL = 'https://box.boxhigher.com/api/client/public'
    static AUTH_KEY = '123sdsad'

    static TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNWY0YjE4YWRmYzFjMWE3MmJiNjFhYjllMWY1MmRhNTkxYjg2NzNjZTkzNTg3M2I3ZDYzNmRkZjI4ODQ3OTRlMmM5MzI5MTgwMzU2ZDY1ODkiLCJpYXQiOjE1ODgyODUzMzYsIm5iZiI6MTU4ODI4NTMzNiwiZXhwIjoxNjE5ODIxMzM2LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.1TXqaJhnlRfgit32OuindUUa6FuuXibyqTMlQtP1bdZvkXaEJe98HzLIoH1UdeEt1H4jWEcnpYggmsQ3UGMikPpKhP34g_DPEZ8G7i_c62tmr-SAM9mNz9KrQQkuaQ2jeHHBAINrluTlZAc8jqdyE-5rTTAOLAxnSNkgGxI0pF0MbWqrp3anlyT74g0gjMy5y5uk7-6a8uLigd1toRFFc7_MRyEqGvIe6Zcstlh_5A6Kx3njwyX84K7fD7ZYye04QVDnkOSgBlHMhjpSXTZ-AptTeS0KWMmJLOycak-o8mlm2PWjoushfhflFwpbfxYB9gD3sCUByK6RYqToFCBhfs25UpvgZ_mV_pVkdw4Y1XaeP0Zh0YJPPBOINxu4jXfaap9SPh_RsG_mQf2d82V6XNcWk3IETvp_VLSMeZDzVhYNfBzGViuvjTVI6GHGQG1Xlobm2VPnr_BwRI4_W4hznNRQpBL1n3RmYDYVVsZSEzyBRvA347Oz0-y1iMYxoZhMafFSB-U9AhqT40GnyWwOzc3EQBbF5LObaXIXlz2QTc5cAiojoAzMQiKfS_0A3qNVzeAn1FhNid7R-Du90cMmIalLPoAmS2DhCkx5B7JjqFBuSDLtPTGzckE3giVoC6OA643dT3DDOOoZPGMbK8elcEYedHlrEbY6eqjUxdrrgok"

    static LOGIN = '/auth/login' //post
    static USER_DATA = '/user/data' //get
    static USER_UPDATE = '/user/update-profile' //get
    static CHANGE_PASSWORD = '/auth/change-pass' //post


    static GET_FAQ = '/getFaq' // get
    static GET_PROJECTS = '/get-projects/' // get // id
    static GET_PAYMENTS = '/payments-plans' // get

    static TOTAL_VISITOR_AND_PAGEVIEW = '/analytics/totalVisitorsAndPageViews' // post
    static DEVICE_CATEGORY = '/analytics/deviceCategory' // post 
    static TOTAL_ACTIVE_USERS = '/analytics/todayActiveUsers' // post 
    static PAGE_VIEWS = '/analytics/pageViews' // post 
    static TOP_REFERRERS = '/analytics/topReferrers' // post 
    static PAYMENT_HISTORY = '/user/getPaymentsByUserId' // post 

    

    static CPANEL_USER_DETAIL = 'http://box.boxhigher.com/api/v1/client/domain/get/' // post 
    static CPANEL_DOMAIN_DETAIL = 'http://box.boxhigher.com/api/v1/client/analytics/user/' // post 
    static CPANEL_LINK = 'http://box.boxhigher.com/api/v1/client/domain/link/' // post 

    








}


export default API