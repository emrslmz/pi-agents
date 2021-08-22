<template>
  <div>
    {{ userName }}
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'Home',
  created() {
   console.log(localStorage.getItem('userName'));
  },
  computed: {
    ...mapState('Start', ['userName'])
  },
};
</script>
