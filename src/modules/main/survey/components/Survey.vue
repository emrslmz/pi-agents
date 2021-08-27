<template>
  <div>
    <div class="d-flex flex-column justify-content-center align-items-center page" v-if="data">
      <div class="page-header">
        <h3>{{ data.name }}</h3>
        <small>{{ data.name }} anketine hoş geldin! </small> <br>
        <small>Bu ankette toplam 7 soru bulunuyor! Anket sonunda en çok hangi karaktere benzediğini görebilirsin.</small>
      </div>
      <div class="page-content">
sorularr {{ question }}
      </div>
    </div>
    <div v-else>loading</div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'SurveySide',
  data() {
    return {
      data: {},
      question: [],
    };
  },
  computed: {
    ...mapState('Survey', ['survey', 'surveyQuestions']),
  },
  methods: {
    findSurvey() {
      this.data = this.survey.find(a => a.id === this.$route.params.id);
    },
    findQuestion() {
      this.question = this.surveyQuestions.filter(s => s.surveyId === this.findSurvey.id);
    },
  },
  created() {
    this.findSurvey();
    this.findQuestion();
  }
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
