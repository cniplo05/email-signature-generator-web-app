import {
  SWITCH,
} from "../types/actions.type";
import { SET_TEMPLATE, SET_DEFAULT, SET_ERROR } from "../types/mutations.type";

const state = {
  errors: null,
  template: {}
};

const getters = {
  currentTemplate(state) {
    return state.template;
  }
};

const actions = {
  [SWITCH](context, data) {
    context.commit(SET_TEMPLATE, data);
    console.log(data)
  }
};

const mutations = {
  [SET_ERROR](state, error) {
    state.errors = error;
  },
  [SET_TEMPLATE](state, data) {
    state.template = data.template;
    state.errors = {};
  },
  [SET_DEFAULT](state) {
    state.template = {};
    state.errors = {};
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
