<template>
  <div>
    <div class="page">
      <div class="page-header">
        <h1>{{ surveyData.name }} anketine hoş geldin! </h1>
        <h6>Bu ankette toplam soru bulunuyor! Anket sonunda en çok hangi karaktere benzediğini görebilirsin.</h6>
      </div>
      <div class="page-content" v-if="surveyData && loadingSurvey">
        <div class="question-container" v-for="(que, index) in question" :key="index" :class="questionAnsweredId > index ? 'answered' : ''" v-show="questionAnsweredId >= index">
          <div class="question-id">{{ index+1 }}</div>
          <div class="question-text">{{ que.text }}</div>
          <div class="question-options">
            <button
                class="btn option-definitely-yes"
                :class="questionAnsweredId > index ? 'option-answered' : ''"
                :disabled="questionAnsweredId > index"
                @click="handleButtonEvent(5)">Kesinlikle evet</button>
            <button
                class="btn option-yes"
                :class="questionAnsweredId > index ? 'option-answered' : ''"
                :disabled="questionAnsweredId > index"
                @click="handleButtonEvent(4)">Evet</button>
            <button
                class="btn option-sometimes"
                :class="questionAnsweredId > index ? 'option-answered' : ''"
                :disabled="questionAnsweredId > index"
                @click="handleButtonEvent(3)">Bazen</button>
            <button
                class="btn option-rarely"
                :class="questionAnsweredId > index ? 'option-answered' : ''"
                :disabled="questionAnsweredId > index"
                @click="handleButtonEvent(1)">Nadiren</button>
            <button
                class="btn option-no"
                :class="questionAnsweredId > index ? 'option-answered' : ''"
                :disabled="questionAnsweredId > index"
                @click="handleButtonEvent(-3)">Hayır</button>
            <button
                class="btn option-definitely-no"
                :class="questionAnsweredId > index ? 'option-answered' : ''"
                :disabled="questionAnsweredId > index"
                @click="handleButtonEvent(-5)">Kesinlikle hayır</button>
          </div>

        </div>

        <div v-if="questionAnsweredId === question.length">
          <router-link to="/survey"><button class="btn try-again-button bg-warning">Tekrar Dene <i class="fas fa-sync-alt"></i></button>
          </router-link>
          <router-link to="/"><button class="btn try-again-button bg-primary">Ana Sayfa <i class="fas fa-home"></i></button></router-link>
        </div>


      </div>
      <div class="page-content" v-else>
        Anketler Yükleniyor... Birkaç Saniye içinde testi çözebilirsin
        <h2><i class="fas fa-spinner fa-pulse"></i></h2>


      </div>
    </div>

    <div>
      <survey-finished-modal v-if="finished" @close="finished = false" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'SurveySide',
  components: {
    SurveyFinishedModal: () => import('@/modules/main/components/modals/SurveyFinishedModal.vue'),
  },
  data() {
    return {
      surveyData: {},
      question: [],
      questionAnsweredId: 0,
      userSurveyPoint: 0,
      finished: false,
      loadingSurvey: false,
    };
  },
  computed: {
    ...mapState('Survey', ['surveyCategory', 'surveyQuestions']),
  },
  methods: {
     findSurveyInfo() {
       this.surveyCategory.find((s) => {
         if (s.id == this.$route.params.id) {
           this.surveyData = s;
         }
       });
       this.findSurveyQuestion();
    },
    shuffle(array) {
      let currentIndex = array.length,  randomIndex;

      // While there remain elements to shuffle...
      while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }

      return array;
    },
    findSurveyQuestion() {
     const selectQuestion = this.surveyQuestions.filter((q) => {
        if (q.surveyId == this.surveyData.id) {
          return true;
        }
      });
      selectQuestion.forEach(x => {
        this.question.push(x);
      })
    },
    handleButtonEvent(point) {
       this.questionAnsweredId++;
       this.userSurveyPoint += (point);
        if (this.questionAnsweredId === this.question.length) {
          this.finished = true;
        }
    }
  },
  async created() {
    this.findSurveyInfo();
    await this.shuffle(this.question);
    setTimeout(() => {
      this.loadingSurvey = true;
    }, 1000);
  },
};
</script>

<style scoped>
.page {
  min-height: 84vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
}

.page-header {
  text-align: center;
}

.page-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 200px;
}

.question-container {
  width: 900px;
  min-height: 100px;
  margin: 20px 0 5px 0;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  border-radius: 15px;
  opacity: 1;
}

.question-id {
  position: absolute;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0 0 0 20px;
  color: #f5f5f5;
  font-size: 64px;
  font-style: italic;
}

.question-text {
  z-index: 10;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 10px 100px 10px 100px;
}

.question-options {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0 10px 0;
}

.question-options button {
  padding: 0 10px 0 10px;
  opacity: 0.9;
  transition: 0.2s;
  border-top: none;
  border-right: none;
  border-left: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-width: 90px;
  min-height: 30px;
  margin: 0 5px 0 5px;
  border-radius: 16px;
  text-decoration: none;
  font-weight:400;
  color:#FFFFFF;
  position: relative;
}

.question-options button:hover {
  opacity: 1;
  transition: 0.4s;
  top: 0.1em;
}

.option-definitely-yes {
  background-image: linear-gradient(to top, #0ba360 0%, #3cba92 100%);
}

.option-yes {
  background-image: linear-gradient(60deg, #96deda 0%, #50c9c3 100%);
}

.option-sometimes {
  background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
}

.option-rarely {
  background-image: linear-gradient(-20deg, #2b5876 0%, #4e4376 100%);
}

.option-no {
  background-image: linear-gradient(-20deg, #fc6076 0%, #ff9a44 100%);
}

.option-definitely-no {
  background-image: linear-gradient(to right, #f9d423 0%, #ff4e50 100%);
}

.option-answered {
  background-image: linear-gradient(to left, #BDBBBE 0%, #9D9EA3 100%), radial-gradient(88% 271%, rgba(255, 255, 255, 0.25) 0%, rgba(254, 254, 254, 0.25) 1%, rgba(0, 0, 0, 0.25) 100%), radial-gradient(50% 100%, rgba(255, 255, 255, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%);
  background-blend-mode: normal, lighten, soft-light;
}

.answered {
  opacity: 0.6;
}

.try-again-button {
  margin: 15px;
  min-width: 150px;
  transition: 0.5s;
  display:inline-block;
  padding: 0.7em 1.4em;
  border-radius: 15px;
  text-decoration:none;
  text-transform: uppercase;
  font-weight:400;
  color:#FFFFFF;
  box-shadow:inset 0 -0.6em 0 -0.35em rgba(0,0,0,0.17);
  text-align:center;
  position:relative;
}
</style>
