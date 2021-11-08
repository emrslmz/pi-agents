import Vue from 'vue'
import App from './core/App.vue'
import router from './router';
import store from './store';
import VueConfetti from 'vue-confetti';

Vue.config.productionTip = false
Vue.use(VueConfetti);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
