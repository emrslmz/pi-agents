<template>
  <div>
    <user-info-modal v-if="this.userInfoModal" @close="setUserInfoModal()" />
    <Home-page />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Home',
  components: {
    UserInfoModal: () => import('@/modules/main/home/components/modals/UserInfoModal.vue'),
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
