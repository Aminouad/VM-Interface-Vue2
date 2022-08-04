import Vue from "vue";
import Vuex from "vuex";

import authenticationModule from "./modules/authentication/index.js";
import companiesModule from "./modules/companies/index.js";
import visitsModule from "./modules/visits/index.js";

Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    authenticationModule,
    companies:companiesModule,
    visits:visitsModule,

},
});
