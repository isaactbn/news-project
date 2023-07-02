import axios from 'axios'
import { apiGetAuth, apiGetNonAuth, apiPostNonAuth } from '~/utils/api'
import { API_USER } from '~/utils/api-url'

export const state = () => ({
  news: {},
  meta_filter: {},
})

export const mutations = {
  SET_NEWS: (state, payload) => {
    state.news = payload
  },
  SET_META_FILTER: (state, payload) => {
    state.meta_filter = payload
  }
}

export const actions = {
  async getNews (context, data) {
    try {
      const param = data ? (
        `?q=${data.q}&from=${data.from}&to=${data.to}&language=${data.language || 'en'}&sortBy=publishedAt&pageSize=${data.pageSize || 10}&page=${data.page || 1}&apiKey=a09ad5ff23f64fde8f66201265090c46`
        ) : (
          '?q=tesla&from=2023-06-01&sortBy=publishedAt&pageSize=10&apiKey=a09ad5ff23f64fde8f66201265090c46'
        )
      const response = await apiGetNonAuth(API_USER.LIST(param))
      context.commit('SET_NEWS', response.data)
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err.response)
      return err.response
    }
  },
}

export const getters = {
  news: (state) => {
    return state.news
  },
  meta_filter: (state) => {
    return state.meta_filter
  }
}
