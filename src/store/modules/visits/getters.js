export default {
    visits(state) {
        return state.visits;
    },
    hasVisits(state){  //it's for the case when no company available
          return state.visits && state.visits.length > 0;
    }  
};