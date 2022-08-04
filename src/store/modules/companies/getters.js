export default {
    companies(state) {
        return state.companies;
    },
    hasCompanies(state){  //it's for the case when no company available
          return state.companies && state.companies.length > 0;
    }  
};