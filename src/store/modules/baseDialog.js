const state = {
  showLoading: false,
  showMsgDialog: false,
  msgType: 'success',
  message: ''
}
const getters = {
  showLoading(state) {
    return state.showLoading
  },
  showMsgDialog(state) {
    return state.showMsgDialog
  },
  msgType(state) {
    return state.msgType
  },
  message(state) {
    return state.message
  },
}

const mutations = {
  SET_SHOW_LOADING(state, showLoading) {
    state.showLoading = showLoading;
  },
  SET_SHOW_MSG_DIALOG(state, showMsgDialog) {
    state.showMsgDialog = showMsgDialog;
  },
  SET_MSG_TYPE(state, msgType) {
    state.msgType = msgType;
  },
  SET_MESSAGE(state, message) {
    state.message = message;
  },
}

const actions = {
  setShowLoading({commit}, value) {
    commit('SET_SHOW_LOADING', value);
  },
  setShowMsgDialog({commit}, value) {
    commit('SET_SHOW_MSG_DIALOG', value.show);
    commit('SET_MSG_TYPE', value.type);
    commit('SET_MESSAGE', value.message||'');
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}