import Vue from 'vue';
import Vuex from 'vuex';

import Home from '@/modules/main/home/store';
import Survey from '@/modules/main/survey/store';

Vue.use(Vuex);

export default new Vuex.Store({
    namespaced: true,
    modules: {
        Home,
        Survey,
    },
});
