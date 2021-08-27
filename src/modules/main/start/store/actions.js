export const setUserName = async ({ commit }, data) => {
    commit('SET_USERNAME', data);
};

export const setUserInfoModal = async  ({ commit }, data) => {
    commit('SET_USERINFO_MODAL', data);
};
