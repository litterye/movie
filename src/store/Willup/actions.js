import axios from 'axios'

const willupgetaction = 'willupgetaction'

let actions = {
    willupget({ commit, state }) {
        axios({
            method: 'get',
            // url: '/ajax/comingList',
            // params: {
            //     ci: 50,
            //     token: '',
            //     limit: 10
            // }
            url: '/ajax/mostExpected',
            params: {
                ci: 50,
                limit: 10,
                offset: 0,
                token: ''
            }
        }).then(res => {
            let action = {
                type: willupgetaction,
                data: res.data
            }
            commit(action)
                // console.log(res)
        }).catch(err => console.log(1))
    }
}

export default actions