<template>
  <div>
    <the-header v-if="$route.name !== 'StartPage'" />
    <router-view />
    <home-page v-if="$route.name === 'StartPage'" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  components: {
    TheHeader: () => import('@/modules/main/start/layouts/TheHeader.vue'),
    HomePage: () => import('@/modules/main/start/components/StartPage.vue'),
  },
  computed: {
    ...mapState('Start', ['userName']),
  },
  methods: {
    ...mapActions('Start', ['setUserName']),
  },
  created() {
    this.setUserName(this.userName);
  }
};
</script>
