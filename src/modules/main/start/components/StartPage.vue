<template>
  <div>sa</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'StartPage',
  data() {
    return {
      userName: '',
    };
  },
  methods: {
    ...mapActions('Start', ['setUserName']),
  },
};
</script>

