import axios from 'axios'
import Qs from 'qs'

//设置全局axios默认值
axios.defaults.timeout = 15000; //15000的超时验证
axios.defaults.withCredentials = true;//跨域带cookie
// axios.defaults.headers.common['SESSIONID'] = SESSIONID;

function http(type, url, params, contentType) {
    let contentTypeUse = contentType == 'json' ? 'application/json' : 'application/x-www-form-urlencoded';
    let paramsUse = contentType == 'json' ? params : Qs.stringify(params);

    if (type == 'get') {
        return new Promise((resolve, reject) => {
            axios({
                method: 'get',
                url: url,
                // headers: {'SESSIONID': SESSIONID},
                params: params
            }).then((res) => {
                resolve(res.data)
            })
        })
    } else {
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                url: url,
                headers: { 'Content-Type': contentTypeUse, 'packname': ''},
                data: paramsUse
            }).then((res) => {
                resolve(res.data)
            })
        })
    }
}

export default http
