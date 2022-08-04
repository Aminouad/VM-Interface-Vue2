export default {
    addPersonnel(state,payload) {
        state.personnels.push(payload);
    },
    setPersonnel(state, payload) {
        state.personnels = payload;
      },
};