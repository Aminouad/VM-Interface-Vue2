export default {
    setUser(state, payload) {
        state.token = payload.token;

        state.userId=payload.userId;
        state.userEmail=payload.userEmail;

        state.role=payload.role;
    },
    logout(state) {
        state.token = null;
        state.userId=null;
        state.role=null;
        state.userEmail=null;
        localStorage.clear();
        console.log("logOut");
    }
};