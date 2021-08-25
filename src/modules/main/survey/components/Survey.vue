<template>
  <div>
    secilen survey {{ this.$route.params.id }} {{ findSurvey }}
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'SurveySide',
  computed: {
    ...mapState('Survey', ['survey']),
    findSurvey() {
      return this.survey.find(a => a.id === this.$route.params.id);
    }
  },

};
</script>
