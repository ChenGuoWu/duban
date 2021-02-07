import axios from '@/config/httpConfig'
import axiosS from '@/config/httpConfigS'
//获取原始数据
export function getUserInfoes(params) {
    return axiosS.get( '/carsoa-base-dmz/findByUsername', params)
}

//保存意见
export function saveOpinion(params,config) {
    return axios.post( '/carsoa-integerated-dmz/oaOpinion/saveOpinion', params,config)
}
