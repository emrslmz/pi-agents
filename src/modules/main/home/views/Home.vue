<template>
  <div>
    {{ userName }}
    <user-info-modal v-if="modalStatus" @close="modalStatus = false" />
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Home',
  data() {
    return {
      modalStatus: true,
    };
  },
  components: {
    UserInfoModal: () => import('@/modules/main/home/components/modals/UserInfoModal.vue'),
  },
  created() {
   console.log(localStorage.getItem('userName'));
  },
  computed: {
    ...mapState('Start', ['userName'])
  },
};
</script>
