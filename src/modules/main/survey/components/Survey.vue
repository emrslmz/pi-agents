<template>
  <div>
    <div class="d-flex flex-column justify-content-center align-items-center page" v-if="findSurvey">
      <div class="page-header">
        <h3>{{ findSurvey.name }}</h3>
        <small>{{ findSurvey.name }} anketine hoş geldin! </small> <br>
        <small>Bu ankette toplam 7 soru bulunuyor! Anket sonunda en çok hangi karaktere benzediğini görebilirsin.</small>
      </div>
      <div class="page-content">
sorularr {{ findQuestion }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'SurveySide',
  computed: {
    ...mapState('Survey', ['survey', 'surveyQuestions']),
    findSurvey() {
      return this.survey.find(a => a.id === this.$route.params.id);
    },
    findQuestion() {
      return this.surveyQuestions.filter(s => s.surveyId === this.findSurvey.id);
    },
  },
};
</script>

<style scoped>
.page {
  min-height: 50vh;
}

.page-header {
  text-align: center;
}

.page-header small {
  letter-spacing: 3px;
}

</style>
