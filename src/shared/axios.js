import axiosAPI from 'axios';


const axios = axiosAPI.create({
    baseURL: import.meta.env.VITE_REACT_API_URL
})

axios.interceptors.request.use(request => {
    // console.log('Starting Request', request)
    // let data = allLogs.filter((f) => f.route ==)
    // if (data.length) {
    //     request.headers = {
    //         ...request.headers,
    //         "log": data[0].log,
    //         nolog: true,
    //     }
    // }
console.log(import.meta.env.VITE_REACT_API_URL);

    return request
})

axios.interceptors.response.use(response => {
    return response
})


export { axios };