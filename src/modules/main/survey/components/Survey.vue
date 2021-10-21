<template>
  <div>
    <div class="d-flex flex-column justify-content-start align-items-center page" v-if="data">
      <div class="page-header">
        <h3></h3>
        <small>{{ data.name }} anketine hoş geldin! </small> <br>
        <small>Bu ankette toplam {{ question.length }} soru bulunuyor! Anket sonunda en çok hangi karaktere benzediğini görebilirsin.</small>
      </div>
      <div class="page-content">
          sadasdas {{ data.id }}
      </div>
      <div class="page-content d-flex flex-column justify-content-center align-items-center">
        <div class="question-container" v-for="(que, index) in question" :key="index">
        {{que}}
        </div>

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
     findSurveyInfo() {
       this.survey.find((s) => {
         if (s.id == this.$route.params.id) {
           this.data = s;
         }
       });
       this.findSurveyQuestion();
    },
    findSurveyQuestion() {
     const selectQuestion = this.surveyQuestions.filter((q) => {
        if (q.surveyId == this.data.id) {
          return true;
        }
      });
      selectQuestion.forEach(x => {
        this.question.push(x);
      })
    },
  },
  created() {
    this.findSurveyInfo();
  },
};
</script>

<style scoped>
.page {
  min-height: 100vh;
}

.page-header {
  text-align: center;
}

.page-header small {
  letter-spacing: 3px;
}

.question-container {
  width: 900px;
  min-height: 100px;
  margin: 20px 0 5px 0;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  border-radius: 15px;
}
</style>
