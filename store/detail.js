import axios from 'axios'

export const state = () => ({
  data_detail: {},
})

export const mutations = {
  SET_DATA_DETAIL: (state, payload) => {
    state.data_detail = payload
  }
}

export const actions = {
}

export const getters = {
  data_detail: (state) => {
    return state.data_detail
  }
}
