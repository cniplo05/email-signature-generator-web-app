import Vue from "vue";
import Vuex from "vuex";

import tab from "./modules/tab.module";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
    tab
    }
});
