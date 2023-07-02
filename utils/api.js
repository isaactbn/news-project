import axios from 'axios'
import * as Cookies from 'js-cookie'
import { METHOD } from './constant'
const token = Cookies.get('token')
const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone

export const apiGetNonAuth = (URL, params) =>
  axios({
    url: URL,
    method: METHOD.GET,
    params
  })

export const apiGetAuth = (URL, params) =>
  axios({
    url: URL,
    method: METHOD.GET,
    params,
    headers: {
      Authorization: token
    }
  })
export const apiGetAuthTimezone = (URL, params) =>
  axios({
    url: URL,
    method: METHOD.GET,
    params,
    headers: {
      Authorization: token,
      Timezone: timezone
    }
  })

export const apiPostNonAuth = (URL, data) =>
  axios({
    url: URL,
    method: METHOD.POST,
    data
  })

export const apiPostAuth = (URL, data) =>
  axios({
    url: URL,
    method: METHOD.POST,
    data,
    headers: {
      Authorization: token
    }
  })

export const apiPutNonAuth = (URL, data) =>
  axios({
    url: URL,
    method: METHOD.PUT,
    data
  })
export const apiPutAuth = (URL, data) =>
  axios({
    url: URL,
    method: METHOD.PUT,
    data,
    headers: {
      Authorization: token
    }
  })

export const apiDeleteNonAuth = (URL, data) =>
  axios({
    url: URL,
    method: METHOD.DELETE,
    data
  })

export const apiDeleteAuth = (URL, data) =>
  axios({
    url: URL,
    method: METHOD.DELETE,
    data,
    headers: {
      Authorization: token
    }
  })
