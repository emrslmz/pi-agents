export default {
    SET_USERNAME(state, data) {
      state.userName = data;
      localStorage.setItem('userName', data);
    },
    SET_USERINFO_MODAL(state, data) {
        state.userInfoModal = data;
    }
};

