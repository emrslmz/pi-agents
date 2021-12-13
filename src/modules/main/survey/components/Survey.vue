<template>
  <div>
    <div class="page">
      <div class="page-header" v-if="questionAnsweredId !== question.length">
        <h1>{{ surveyData.name }} anketine hos geldin! </h1>
        <h6>Bu ankette toplam soru bulunuyor! Anket sonunda en çok hangi karaktere benzedigini gorebilirsin.</h6>
      </div>
      <div class="page-header" v-else-if="questionAnsweredId === question.length && question.length !== 0">
        <h1>Anketi tamamladın!</h1>
        <img class="survey-finished-img" src="/assets/img/icon/pika_running.gif" />
      </div>
      <div class="page-header d-flex" v-if="question.length === 0">
        <h1>Bu ankette hiç soru yok! </h1>
        <img class="survey-finished-img" src="/assets/img/icon/sad_cry.gif" />
      </div>
      <div class="page-content" v-if="surveyData && loadingSurvey">
        <div class="question-container px-md-5" v-for="(que, index) in question" :key="index" :class="questionAnsweredId > index ? 'answered' : ''" v-show="questionAnsweredId === index">
          <div class="question-id">{{ index+1 }}</div>
          <div class="question-text">{{ que.text }}</div>
          <div class="question-options d-sm-flex justify-content-center align-items-center text-center">
            <div>
              <button
                  class="btn option-definitely-yes"
                  :class="questionAnsweredId > index ? 'option-answered' : ''"
                  :disabled="questionAnsweredId > index"
                  @click="handleButtonEvent(5)">Kesinlikle evet </button>
              <button
                  class="btn option-yes"
                  :class="questionAnsweredId > index ? 'option-answered' : ''"
                  :disabled="questionAnsweredId > index"
                  @click="handleButtonEvent(4)">Evet</button>
            </div>
            <div>
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
            </div>
           <div>
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

<!--            <div class="question-options">-->
<!--              <button class="btn question-back text-right"-->
<!--                      :class="questionAnsweredId === 0 ? 'option-answered' : ''"-->
<!--                      v-show="questionAnsweredId !== 0"-->
<!--                      :disabled="questionAnsweredId === 0"-->
<!--                      @click="questionAnsweredId&#45;&#45;">-->
<!--                <i class="fas fa-undo-alt"></i>-->
<!--              </button>-->
<!--            </div>-->
          </div>
        </div>

        <div class="question-after-button" v-if="questionAnsweredId === question.length && question.length !== 0">
          <router-link to="/survey">
            <button class="try-again">Tekrar Dene <i class="fas fa-sync-alt"></i></button>
          </router-link>
          <router-link to="/">
            <button class="go-home">Ana Sayfa <i class="fas fa-home"></i></button>
          </router-link>
        </div>

        <div class="question-after-button" v-else-if="question.length === 0">
          <router-link to="/">
            <button class="go-home">Ana Sayfa <i class="fas fa-home"></i></button>
          </router-link>
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
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
  font-family: CarterOne, sans-serif;
}

.page-header {
  text-align: center;
  font-family: PassionOne, sans-serif;
}

.page-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 200px;
}

.question-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 200px;
  max-width: 1100px;
  margin: 20px 10px 5px 10px;
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
  margin-bottom: 100px;
  font-style: italic;
}

.question-text {
  z-index: 10;
  display: flex;
  text-align: center;
  width: auto;
  justify-content: center;
  padding: 10px 100px 10px 100px;
}

.question-options {
  padding: 10px 0 10px 0;
}

.question-options button {
  position: relative;
  top: 0;
  cursor: pointer;
  text-decoration: none !important;
  outline: none !important;
  font-size: 12px;
  min-width: 90px;
  min-height: 30px;
  line-height: 1.5em;
  letter-spacing: .1em;
  border: none;
  margin: 15px 15px 30px;
  border-top: 3px solid rgba(255,255,255,.3);
  color: #fff !important;
  border-radius: 8px;
}

.question-options button::before {
  content: '';
  height: 10%;
  position: absolute;
  width: 40%;
  background: #fff;
  right: 13%;
  top: -3%;
  border-radius: 99px;
}
.question-options button::after {
  content: '';
  height: 10%;
  position: absolute;
  width: 5%;
  background: #fff;
  right: 5%;
  top: -3%;
  border-radius: 99px;
}

.question-options button.option-definitely-yes {
  background: repeating-linear-gradient( 45deg, #54d440, #54d440 5px, #52cc3f 5px, #52cc3f 10px);
  box-shadow: 0 6px 0 #348628, 0 8px 1px 1px rgba(0,0,0,.3), 0 10px 0 5px #2a6d20, 0 12px 0 5px #39822e, 0 15px 0 5px #1d4c16, 0 15px 1px 6px rgba(0,0,0,.3);
  border-bottom: 3px solid rgba(40, 117, 29, 0.5);
  text-shadow: 2px 2px 1px #348628, -2px 2px 1px #348628, 2px -2px 1px #348628, -2px -2px 1px #348628, 0px 2px 1px #348628, 0px -2px 1px #348628, 0px 4px 1px #1d4c16, 2px 4px 1px #1d4c16, -2px 4px 1px #1d4c16;
}
.question-options button.option-definitely-yes:hover {
  top:2px;
  box-shadow: 0 4px 0 #348628, 0 6px 1px 1px rgba(0,0,0,.3), 0 8px 0 5px #2a6d20, 0 10px 0 5px #39822e, 0 13px 0 5px #1d4c16, 0 13px 1px 6px rgba(0,0,0,.3);
}

.question-options button.option-yes {
  background: repeating-linear-gradient( 45deg, #2ff5de, #2fbef6 5px, #248cfc 5px, #3fbccc 10px);
  box-shadow: 0 6px 0 #286b86, 0 8px 1px 1px rgba(0,0,0,.3), 0 10px 0 5px #205e6d, 0 12px 0 5px #2e7f82, 0 15px 0 5px #164a4c, 0 15px 1px 6px rgba(0,0,0,.3);
  border-bottom: 3px solid rgb(29, 104, 117);
  text-shadow: 2px 2px 1px #286586, -2px 2px 1px #287e86, 2px -2px 1px #286886, -2px -2px 1px #287086, 0px 2px 1px #286b86, 0px -2px 1px #287086, 0px 4px 1px #16394c, 2px 4px 1px #16414c, -2px 4px 1px #16394c;
}
.question-options button.option-yes:hover {
  top:2px;
  box-shadow: 0 4px 0 #287086, 0 6px 1px 1px rgba(0,0,0,.3), 0 8px 0 5px #206d67, 0 10px 0 5px #2e6782, 0 13px 0 5px #163f4c, 0 13px 1px 6px rgba(0,0,0,.3);
}


.question-options button.option-sometimes {
  background: repeating-linear-gradient( 45deg, #3ebbf7, #3ebbf7 5px, #45b1f4 5px, #45b1f4 10px);
  box-shadow: 0 6px 0 #266b91, 0 8px 1px 1px rgba(0,0,0,.3), 0 10px 0 5px #12517d, 0 12px 0 5px #1a6b9a, 0 15px 0 5px #0c405e, 0 15px 1px 6px rgba(0,0,0,.3);
  border-bottom: 3px solid rgba(16, 91, 146, 0.5);
  text-shadow: 2px 2px 1px #0066a2, -2px 2px 1px #0066a2, 2px -2px 1px #0066a2, -2px -2px 1px #0066a2, 0px 2px 1px #0066a2, 0px -2px 1px #0066a2, 0px 4px 1px #004a87, 2px 4px 1px #004a87, -2px 4px 1px #004a87;
}
.question-options button.option-sometimes:hover {
  top:2px;
  box-shadow: 0 4px 0 #266b91, 0 6px 1px 1px rgba(0,0,0,.3), 0 8px 0 5px #12517d, 0 10px 0 5px #1a6b9a, 0 13px 0 5px #0c405e, 0 13px 1px 6px rgba(0,0,0,.3);
}

.question-options button.option-rarely {
  background: repeating-linear-gradient( 45deg, #aa3ef7, #b03ef7 5px, #d445f4 5px, #d445f4 10px);
  box-shadow: 0 6px 0 #642691, 0 8px 1px 1px rgba(0, 0, 0, 0.3), 0 10px 0 5px #76127d, 0 12px 0 5px #871a9a, 0 15px 0 5px #480c5e, 0 15px 1px 6px rgba(0,0,0,.3);
  border-bottom: 3px solid rgb(133, 16, 146);
  text-shadow: 2px 2px 1px #8400a2, -2px 2px 1px #a20092, 2px -2px 1px #a2009a, -2px -2px 1px #a2009a, 0px 2px 1px #a2009f, 0px -2px 1px #9200a2, 0px 4px 1px #870080, 2px 4px 1px #480087, -2px 4px 1px #530087;
}
.question-options button.option-rarely:hover {
  top:2px;
  box-shadow: 0 4px 0 #862691, 0 6px 1px 1px rgba(0,0,0,.3), 0 8px 0 5px #54127d, 0 10px 0 5px #651a9a, 0 13px 0 5px #5e0c5d, 0 13px 1px 6px rgba(0,0,0,.3);
}


.question-options button.option-no {
  background: repeating-linear-gradient( 45deg, #ffc800, #ffc800 5px, #ffc200 5px, #ffc200 10px);
  box-shadow: 0 6px 0 #b76113, 0 8px 1px 1px rgba(0,0,0,.3), 0 10px 0 5px #75421f, 0 12px 0 5px #8a542b, 0 15px 0 5px #593116, 0 15px 1px 6px rgba(0,0,0,.3);
  border-bottom: 3px solid rgba(205, 102, 0, 0.5);
  text-shadow: 2px 2px 1px #e78700, -2px 2px 1px #e78700, 2px -2px 1px #e78700, -2px -2px 1px #e78700, 0px 2px 1px #e78700, 0px -2px 1px #e78700, 0px 4px 1px #c96100, 2px 4px 1px #c96100, -2px 4px 1px  #c96100;
}
.question-options button.option-no:hover {
  top:2px;
  box-shadow: 0 4px 0 #b76113, 0 6px 1px 1px rgba(0,0,0,.3), 0 8px 0 5px #75421f, 0 10px 0 5px #8a542b, 0 13px 0 5px #593116, 0 13px 1px 6px rgba(0,0,0,.3);
}


.question-options button.option-definitely-no {
  background: repeating-linear-gradient( 45deg, #ff4f4c, #ff4f4c 5px, #ff4643 5px, #ff4643 10px);
  box-shadow: 0 6px 0 #ae2725, 0 8px 1px 1px rgba(0,0,0,.3), 0 10px 0 5px #831614, 0 12px 0 5px #a33634, 0 15px 0 5px #631716, 0 15px 1px 6px rgba(0,0,0,.3);
  border-bottom: 3px solid rgba(160, 25, 23, 0.5);
  text-shadow: 2px 2px 1px #d72d21, -2px 2px 1px #d72d21, 2px -2px 1px #d72d21, -2px -2px 1px #d72d21, 0px 2px 1px #d72d21, 0px -2px 1px #d72d21, 0px 4px 1px #930704, 2px 4px 1px #930704, -2px 4px 1px  #930704;
}
.question-options button.option-definitely-no:hover {
  top:2px;
  box-shadow: 0 4px 0 #ae2725, 0 6px 1px 1px rgba(0,0,0,.3), 0 8px 0 5px #831614, 0 10px 0 5px #a33634, 0 13px 0 5px #631716, 0 13px 1px 6px rgba(0,0,0,.3);
}

.question-after-button button {
  position: relative;
  top: 0;
  cursor: pointer;
  text-decoration: none !important;
  outline: none !important;
  font-size: 20px;
  min-width: 90px;
  min-height: 30px;
  line-height: 1.5em;
  letter-spacing: .1em;
  border: none;
  margin: 15px 15px 30px;
  border-top: 3px solid rgba(255,255,255,.3);
  color: #fff !important;
  border-radius: 8px;
}

.question-after-button button::before {
  content: '';
  height: 10%;
  position: absolute;
  width: 40%;
  background: #fff;
  right: 13%;
  top: -3%;
  border-radius: 99px;
}
.question-after-button button::after {
  content: '';
  height: 10%;
  position: absolute;
  width: 5%;
  background: #fff;
  right: 5%;
  top: -3%;
  border-radius: 99px;
}

.question-after-button button.try-again {
  background: repeating-linear-gradient( 45deg, #ffc800, #ffc800 5px, #ffc200 5px, #ffc200 10px);
  box-shadow: 0 6px 0 #b76113, 0 8px 1px 1px rgba(0,0,0,.3), 0 10px 0 5px #75421f, 0 12px 0 5px #8a542b, 0 15px 0 5px #593116, 0 15px 1px 6px rgba(0,0,0,.3);
  border-bottom: 3px solid rgba(205, 102, 0, 0.5);
  text-shadow: 2px 2px 1px #e78700, -2px 2px 1px #e78700, 2px -2px 1px #e78700, -2px -2px 1px #e78700, 0px 2px 1px #e78700, 0px -2px 1px #e78700, 0px 4px 1px #c96100, 2px 4px 1px #c96100, -2px 4px 1px  #c96100;
}
.question-after-button button.try-again:hover {
  top:2px;
  box-shadow: 0 4px 0 #b76113, 0 6px 1px 1px rgba(0,0,0,.3), 0 8px 0 5px #75421f, 0 10px 0 5px #8a542b, 0 13px 0 5px #593116, 0 13px 1px 6px rgba(0,0,0,.3);
}

.question-after-button button.go-home {
  background: repeating-linear-gradient( 45deg, #54d440, #54d440 5px, #52cc3f 5px, #52cc3f 10px);
  box-shadow: 0 6px 0 #348628, 0 8px 1px 1px rgba(0,0,0,.3), 0 10px 0 5px #2a6d20, 0 12px 0 5px #39822e, 0 15px 0 5px #1d4c16, 0 15px 1px 6px rgba(0,0,0,.3);
  border-bottom: 3px solid rgba(40, 117, 29, 0.5);
  text-shadow: 2px 2px 1px #348628, -2px 2px 1px #348628, 2px -2px 1px #348628, -2px -2px 1px #348628, 0px 2px 1px #348628, 0px -2px 1px #348628, 0px 4px 1px #1d4c16, 2px 4px 1px #1d4c16, -2px 4px 1px #1d4c16;
}
.question-after-button button.go-home:hover {
  top:2px;
  box-shadow: 0 4px 0 #348628, 0 6px 1px 1px rgba(0,0,0,.3), 0 8px 0 5px #2a6d20, 0 10px 0 5px #39822e, 0 13px 0 5px #1d4c16, 0 13px 1px 6px rgba(0,0,0,.3);
}

.question-back {
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  color: #575757 !important;
}

.option-answered {
  background-image: linear-gradient(to left, #BDBBBE 0%, #9D9EA3 100%), radial-gradient(88% 271%, rgba(255, 255, 255, 0.25) 0%, rgba(254, 254, 254, 0.25) 1%, rgba(0, 0, 0, 0.25) 100%), radial-gradient(50% 100%, rgba(255, 255, 255, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%);
  background-blend-mode: normal, lighten, soft-light;
}

.answered {
  opacity: 0.6;
}


.survey-finished-img {
  transition: 0.5s;
  width: 100px;
}

@media screen and (max-width: 852px) {
  .question-options button {
    min-height: 20px;
  }
}

</style>
