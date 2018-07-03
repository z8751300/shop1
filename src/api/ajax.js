import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:8000'

export default (url, data, type='GET') => {
  if(type == 'GET') {
    let str = ''
    if (data) {
      Object.keys(data).forEach(key => {
        str += key + '=' + data[key] + '&'
      })
      if (str != '') {
        url += '?=' + str.slice(0, str.lastIndexOf('&'))
      }
    }
    return axios.get(url)
  } else {
    return axios.post(url, data)
  }
  
}
