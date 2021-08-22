<template>
  <div>
    <router-view />
      <home-page v-if="$route.name === 'StartPage'" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  components: {
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
