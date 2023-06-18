import { createStore } from 'vuex'
import baseDialog from './modules/baseDialog'
import tickets from './modules/tickets'
import contacts from './modules/contacts'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    baseDialog,
    tickets,
    contacts
  }
})
