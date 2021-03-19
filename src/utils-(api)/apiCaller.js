import Axios from 'axios';
import * as Config from '../constants/Config'

const callApi = (endpoint, method, body) => {
    return Axios({
        method: method,
        url: `${Config.API_URL}/${endpoint}`,
        data: body
    }).catch(err => {
      console.log(err)
    })
}

export default callApi