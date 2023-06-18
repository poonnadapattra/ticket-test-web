import ContactsService from '@/service/contacts.api.js';

const state = {
  contactList: []
}
const getters = {
  contactList(state) {
    return state.contactList
  },
}

const mutations = {
  SET_CONTACT_LIST(state, contactList) {
    state.contactList = contactList;
  } 
}

const actions = {
  getContacts({commit}) {
    return ContactsService.getContacts().then(res => {
      commit('SET_CONTACT_LIST', res.data.data);
      return res;
    })
    .catch(error => {
      console.log('error:', error)
    });
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}