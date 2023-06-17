import TicketsService from '@/service/tickets.api.js';

const state = {
  ticketStatusList: [],
  ticketList: {}
}
const getters = {
  ticketStatusList(state) {
    return state.ticketStatusList
  },
  ticketList(state) {
    return state.ticketList
  }
}

const mutations = {
  SET_TICKET_STATUS_LIST(state, ticketStatusList) {
    state.ticketStatusList = ticketStatusList;
  },
  SET_TICKET_LIST(state, ticketList) {
    state.ticketList = ticketList;
  } 
}

const actions = {
  getTicketStatus({commit}) {
    return TicketsService.getTicketStatus().then(res => {

      commit('SET_TICKET_STATUS_LIST', res.data.data);
      return res;
    })
    .catch(error => {
      console.log('error:', error)
    });
  },
  getTicketList({commit}, params) {

    var queryParms = []

    for (var [key, value] of Object.entries(params)) {
      queryParms.push(`${key}=${value}`)
    }

    return TicketsService.getTicketList('?'+queryParms.join('&')).then(res => {

      commit('SET_TICKET_LIST', res.data.data);

      return res;
    })
    .catch(error => {
      console.log('error:', error)
    });
  },
  // eslint-disable-next-line no-unused-vars
  updateTicket({commit}, params) {

    return TicketsService.updateTicket(params).then(res => {

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