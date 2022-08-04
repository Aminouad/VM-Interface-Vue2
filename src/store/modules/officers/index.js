import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";
export default {
  namespaced: true,
  state() {
    return {
      officers: [],
    };
  },
  mutations, //mutations: mutations we can use a shorten form because we have the same names
  actions,
  getters,
};
