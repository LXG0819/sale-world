
import { axios } from '@/utils/request'
var url = 'http://squantest.tcl.com.cn:81'
export function goldIdeaList (parameter) {
  return axios({
    url: url + '/goldIdea/goldIdeaList',
    method: 'post',
    data: parameter
  })
}

export function goldIdeaDetails (parameter) {
  return axios({
    url:  url + '/goldIdea/goldIdeaDetails',
    method: 'post',
    data: parameter
  })
}


export function goldIdeaTop (parameter) {
  return axios({
    url:  url + '/goldIdea/goldIdeaTop',
    method: 'post',
    data: parameter
  })
}

export function login (parameter) {
  return axios({
    url:  url + '/goldIdea/goldIdeaDelete',
    method: 'post',
    data: parameter
  })
}

export function goldIdeaStatus (parameter) {
  return axios({
    url:  url + '/goldIdea/goldIdeaStatus',
    method: 'post',
    data: parameter
  })
}
export function goldIdeaCategory (parameter) {
  return axios({
    url:  url + '/goldIdea/goldIdeaCategory',
    method: 'post',
    data: parameter
  })
}
