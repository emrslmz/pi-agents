import Vue from 'vue';
import Vuex from 'vuex';

import Start from '@/modules/main/start/store';
import Survey from '@/modules/main/survey/store';

Vue.use(Vuex);

export default new Vuex.Store({
    namespaced: true,
    modules: {
        Start,
        Survey,
    },
});
