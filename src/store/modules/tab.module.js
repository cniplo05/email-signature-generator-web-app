import {
  SWITCH, UPDATE_DATA
} from "../types/actions.type";
import { SET_TEMPLATE, SET_DEFAULT, SET_ERROR, SET_FORM_DATA } from "../types/mutations.type";

const state = {
  errors: null,
  template: {},
  form_data: {}
};

const getters = {
  currentTemplate(state) {
    return state.template;
  },
  currentFormData(state){
    return state.form_data;
  }
};

const actions = {
  [SWITCH](context, data) {
    context.commit(SET_TEMPLATE, data);
    console.log(data)
  },
  [UPDATE_DATA](context, data) {
    context.commit(SET_FORM_DATA, data);
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
  [SET_FORM_DATA](state, data) {
    state.form_data = data;
    state.errors = {};
  },
  [SET_DEFAULT](state) {
    state.form_data = {};
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
