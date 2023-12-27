import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "application/json";

function customRequest (config){
    return axios.request(config).then((res)=>{
        return res;
    }).catch((err)=>{
        if(err.response.status === 404){
            return
        }
        throw err;
    })
}

export function get (url, config, headers) {
    const getConfig = Object.assign(
        {},
        {method: "get", url, params: config, headers: headers}
    )
    return customRequest(getConfig)
}

export function post (url, config, headers) {
    let method = "post";
    const postConfig = Object.assign({}, {method: method, url, data: config, headers: headers})
    return customRequest(postConfig);
}

export function formDataPost (url, config, headers) {
    let method = "post";
    const postConfig = Object.assign({}, {method: method, url, data: config, headers: { "Content-Type": "multipart/form-data" }})
    return customRequest(postConfig);
}