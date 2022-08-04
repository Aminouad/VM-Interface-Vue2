export default {
    addVisit(state,payload) {
        state.visits.push(payload);
    }, setVisits(state, payload) {
        state.visits = payload;
      },
};