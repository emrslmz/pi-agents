<template>
  <div>
    <Home-page />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Home',
  components: {
    HomePage: () => import('@/modules/main/home/components/HomePage.vue'),
  },
  computed: {
    ...mapState('Start', ['userName', 'userInfoModal'])
  },
  methods: {
    ...mapActions('Start', ['setUserInfoModal']),
  },
};
</script>
