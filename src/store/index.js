import Vue from "vue";
import Vuex from "vuex";
import de from "./modules/default";
import routeList from "./modules/routeList";

Vue.use(Vuex);

const options = {
  state: {},
  mutations: {},
  actions: {},
  modules: { de, routeList }
};

export default new Vuex.Store(options);
