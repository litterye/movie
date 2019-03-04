import axios from 'axios'

export default ({ method, url,params }) => {
    return axios({
            method,
            url,
            params
        }).then(res => res.data)
        .catch(err => err)
}
// import axios from 'axios'

// export default ({ method, url }) => {
//     return axios({
//             method,
//             url
//         }).then(res => res.data)
//         .catch(err => err)
// }