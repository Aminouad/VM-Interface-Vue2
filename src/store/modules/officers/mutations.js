export default {
    addCompany(state,payload) {
        state.companies.push(payload);
    }, setCompanies(state, payload) {
        state.companies = payload;
      },
};