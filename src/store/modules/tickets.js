import TicketsService from '@/service/tickets.api.js';

const state = {
  statusList: ['pending', 'accepted', 'resolved', 'rejected'],
  cardDetail: {
    all: {
      bgColor: 'deep-purple-lighten-4',
      color: 'deep-purple-accent-2'
    },
    pending: {
      bgColor: 'orange-lighten-3',
      color: 'orange-lighten-1'
    },
    accepted: {
      bgColor: 'green-lighten-3',
      color: 'green-lighten-1'
    },
    resolved: {
      bgColor: 'cyan-lighten-4',
      color: 'cyan-lighten-3'
    },
    rejected: {
      bgColor: 'pink-lighten-4',
      color: 'pink-lighten-2'
    },
  },
  ticketStatusList: [],
  ticketList: {},
  contactList: [
    { id: 1, name: 'Test1', tel: '0932322323'},
    { id: 2, name: 'Test2', tel: '0932322323'},
  ]
}
const getters = {
  statusList(state) {
    return state.statusList
  },
  cardDetail(state) {
    return state.cardDetail
  },
  ticketStatusList(state) {
    return state.ticketStatusList
  },
  ticketList(state) {
    return state.ticketList
  },
  contactList(state) {
    return state.contactList
  },
}

const mutations = {
  SET_TICKET_STATUS_LIST(state, ticketStatusList) {
    state.ticketStatusList = ticketStatusList;
  },
  SET_TICKET_LIST(state, ticketList) {
    state.ticketList = ticketList;
  },
  SET_CONTACT_LIST(state, contactList) {
    state.contactList = contactList;
  } 
}

const actions = {
  getTicketStatus({commit, dispatch}) {
    return TicketsService.getTicketStatus().then(res => {

      commit('SET_TICKET_STATUS_LIST', res.data.data);
      return res;
    })
    .catch(error => {
      dispatch('baseDialog/setShowMsgDialog', {show: true, type: 'error', message: error}, { root: true })
    });
  },
  getTicketList({commit, dispatch}, params) {
    dispatch('baseDialog/setShowLoading', true, { root: true })
    var queryParms = []

    for (var [key, value] of Object.entries(params)) {
      queryParms.push(`${key}=${value}`)
    }

    return TicketsService.getTicketList('?'+queryParms.join('&')).then(res => {

      commit('SET_TICKET_LIST', res.data.data);
      dispatch('baseDialog/setShowLoading', false, { root: true })
      return res;
    })
    .catch(error => {
      dispatch('baseDialog/setShowLoading', false, { root: true })
      dispatch('baseDialog/setShowMsgDialog', {show: true, type: 'error', message: error}, { root: true })
    });
  },
  // eslint-disable-next-line no-unused-vars
  updateTicket({commit, dispatch}, params) {
    dispatch('baseDialog/setShowLoading', true, { root: true })
    return TicketsService.updateTicket(params).then(res => {
      dispatch('baseDialog/setShowLoading', false, { root: true })
      dispatch('baseDialog/setShowMsgDialog',
        {
          show: true,
          type: 'success',
          message: 'success'
        }, { root: true })
      return res;
    })
    .catch(error => {
      dispatch('baseDialog/setShowLoading', false, { root: true })
      dispatch('baseDialog/setShowMsgDialog', {show: true, type: 'error', message: error}, { root: true })
    });
  },
  // eslint-disable-next-line no-unused-vars
  createTicket({commit, dispatch}, params) {
    dispatch('baseDialog/setShowLoading', true, { root: true })
    return TicketsService.createTicket(params).then(res => {
      dispatch('baseDialog/setShowLoading', false, { root: true })
      dispatch('baseDialog/setShowMsgDialog',
        {
          show: true,
          type: 'success',
          message: 'success'
        }, { root: true })
      return res;
    })
    .catch(error => {
      dispatch('baseDialog/setShowMsgDialog', {show: true, type: 'error', message: error}, { root: true })
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