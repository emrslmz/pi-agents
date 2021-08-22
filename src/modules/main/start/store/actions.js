export const setUserName = async ({ commit }, data) => {
        if (data === '') {  // if userName fre
            const userName = localStorage.getItem('userName');
            commit('SET_USER_NAME', userName);
        } else {
            localStorage.setItem('userName', data);
            commit('SET_USER_NAME', data);
        }
        console.log("name changed");
};
