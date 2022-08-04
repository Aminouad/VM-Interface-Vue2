export default {
  userId(state) {
    return state.userId;
  },
  userEmail(state) {
    return state.userEmail;
  },
  token(state) {
    return state.token;
  },
  role(state) {
    return state.role;
  },
  isAuthenticated(state) {
    return !!state.token;
  },
};
