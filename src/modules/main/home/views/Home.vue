<template>
  <div>
    {{ userInfoModal }}
    <user-info-modal v-if="this.userInfoModal" @close="setUserInfoModal()" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Home',
  components: {
    UserInfoModal: () => import('@/modules/main/home/components/modals/UserInfoModal.vue'),
  },
  computed: {
    ...mapState('Start', ['userName', 'userInfoModal'])
  },
  methods: {
    ...mapActions('Start', ['setUserInfoModal']),
  },
};
</script>
