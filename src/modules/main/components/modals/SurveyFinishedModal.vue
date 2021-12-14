<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container text-center">
        <div v-for="(agent, index) in filterAgents" :key="index" v-show="userPoint === agent.agentId">

          <div class="agent-container" v-if="loadingCounter">

            <div class="pt-5">
              <h5><i class="fas fa-crown"></i> {{ agent.name }} karakterine benziyorsun!</h5>
            </div>

            <div class="d-xl-flex agent-container__context">

              <div class="col-xl-6 col-12 agent-container__image">
                <img class="agent-container__img" :src="'/assets/img/agents/'+ agent.agentPicture" :alt="agent.name"
                     :title="agent.name"/>
                <p class="py-3"><i class="fas fa-user-friends"></i> Seninle beraber {{ agent.numberHave }} kişi aynı
                  kişiliğe sahip!</p>
              </div>

              <div class="col-xl-6 col-12 agent-container__progress">
                <div class="agent-container-rightItem" v-for="(result, index) in filterSurveyResult" :key="index">
                  {{ result.name }} <i :class="result.icon"></i>
                  <div class="progress" :style="result.style">
                    <div class="progress-bar" :class="result.class" role="progressbar"
                         :style="{'width': result.ratio + '%' }" aria-valuenow="100" aria-valuemin="0"
                         aria-valuemax="100">%{{ result.ratio }}
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div class="footer-button">
              <button class="try-again" @click="closeModal">Kapat <i class="fas fa-times-circle"></i></button>
              <a href="https://oyuncudefteri.com" target="_blank">
                <button class="goto-site">Bana bu karakteri anlat! <i class="fas fa-gavel"></i></button>
              </a>
              <a :href="`http://twitter.com/share?url=https%3A%2F%2Fpi-agents.netlify.app&text=🧙${findSurveyCategory.name}'da%20${findAgent.name}%20${tweetLinkText}`" target="_blank">
                <button class="twitter-share-button">
                  Tweet'le
                  <i class="fab fa-twitter"></i>
              </button>
              </a>
            </div>
          </div>

          <div class="scanning-container" v-else>
            <div class="scanning-picture" style="background-image: url('/assets/img/images/scanning.gif')"></div>
            Analiz yapılıyor...
          </div>

        </div>


      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'FinishedModal',
  data() {
    return {
      front: true,
      userPoint: 0,
      loadingCounter: false,
      tweetLinkText: `karakterine benziyormuşum! \r \n \r \n \r \n 🌠Sen de denemek istiyorsan işte: `
    }
  },
   computed: {
    ...mapState('Survey', ['surveyCategory']),
    ...mapState('Extra', ['agents', 'surveyResult']),
    filterAgents() {
      return this.agents.filter((s) => s.agentSurveyCategoryId == this.$route.params.id);
    },
     filterSurveyResult() {
      return this.surveyResult.filter((r) => r.resultSurveyCategoryId == this.$route.params.id);
    },
     findSurveyCategory() {
       return this.surveyCategory.find((c) => c.id == this.$route.params.id);
     },
     findAgent() {
       return this.agents.find((a) => a.agentId == this.userPoint && a.agentSurveyCategoryId == this.$route.params.id);
     }
  },
  methods: {
    closeModal() {
      this.$emit('close');
      this.$confetti.stop();
    },
  },
  async created() {
    const agentNumber = this.agents.filter((s) => s.agentSurveyCategoryId == this.$route.params.id).length;
    this.userPoint = await Math.floor(Math.random() * agentNumber + 1);
    this.$confetti.start();

    setTimeout(() => {
      this.loadingCounter = true;
    }, 1000);

  },
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
  font-family: CarterOne, sans-serif;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 50%;
  height: 83%;
  overflow: auto;
  margin: 0 auto;
  padding: 20px 30px;
  border-radius: 60px 45px 30px 15px/15px 30px 45px 60px;
  background-color: white;
  transition: all 0.3s ease;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
}

.agent-container {
  flex-direction: column;
}

.agent-container__context {
  justify-content: center;
  align-items: center;
}

.agent-container__image {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  align-items: center;
}

.agent-container__img {
  width: 200px;
  height: auto;
}


.agent-container__progress {
  justify-content: center;
  align-items: center;
}

.agent-container-right {
  min-height: 600px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: start;
  flex-direction: column;
}

.agent-container-rightItem {
  padding: 20px 0 0 0;
  width: 100%;
  text-align: center;
  font-weight: bold;
}

.progress {
  height: 30px;
  border-radius: 20px;
}

.progress-bar {
  font-size: 16px;
}


.scanning-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 650px;
}

.scanning-picture {
  width: 100px;
  height: 120px;
  background: center/cover no-repeat;
  break-inside: avoid;
}

.blur-text {
  text-shadow: 0 0 6px #575757;
  color: transparent;
}

.footer-button button {
  font-family: CarterOne, sans-serif;
  position: relative;
  top: 0;
  cursor: pointer;
  text-decoration: none !important;
  outline: none !important;
  font-size: 16px;
  min-width: 270px;
  min-height: 30px;
  line-height: 1.5em;
  letter-spacing: .1em;
  border: none;
  margin: 15px 15px 30px;
  border-top: 3px solid rgba(255, 255, 255, .3);
  color: #fff !important;
  border-radius: 8px;
}

.footer-button button::before {
  content: '';
  height: 10%;
  position: absolute;
  width: 40%;
  background: #fff;
  right: 13%;
  top: -3%;
  border-radius: 99px;
}

.footer-button button::after {
  content: '';
  height: 10%;
  position: absolute;
  width: 5%;
  background: #fff;
  right: 5%;
  top: -3%;
  border-radius: 99px;
}

.footer-button button.try-again {
  background: repeating-linear-gradient(45deg, #ffc800, #ffc800 5px, #ffc200 5px, #ffc200 10px);
  box-shadow: 0 6px 0 #b76113, 0 8px 1px 1px rgba(0, 0, 0, .3), 0 10px 0 5px #75421f, 0 12px 0 5px #8a542b, 0 15px 0 5px #593116, 0 15px 1px 6px rgba(0, 0, 0, .3);
  border-bottom: 3px solid rgba(205, 102, 0, 0.5);
  text-shadow: 2px 2px 1px #e78700, -2px 2px 1px #e78700, 2px -2px 1px #e78700, -2px -2px 1px #e78700, 0px 2px 1px #e78700, 0px -2px 1px #e78700, 0px 4px 1px #c96100, 2px 4px 1px #c96100, -2px 4px 1px #c96100;
}

.footer-button button.try-again:hover {
  top: 2px;
  box-shadow: 0 4px 0 #b76113, 0 6px 1px 1px rgba(0, 0, 0, .3), 0 8px 0 5px #75421f, 0 10px 0 5px #8a542b, 0 13px 0 5px #593116, 0 13px 1px 6px rgba(0, 0, 0, .3);
}

.footer-button button.goto-site {
  background: repeating-linear-gradient(45deg, #54d440, #54d440 5px, #52cc3f 5px, #52cc3f 10px);
  box-shadow: 0 6px 0 #348628, 0 8px 1px 1px rgba(0, 0, 0, .3), 0 10px 0 5px #2a6d20, 0 12px 0 5px #39822e, 0 15px 0 5px #1d4c16, 0 15px 1px 6px rgba(0, 0, 0, .3);
  border-bottom: 3px solid rgba(40, 117, 29, 0.5);
  text-shadow: 2px 2px 1px #348628, -2px 2px 1px #348628, 2px -2px 1px #348628, -2px -2px 1px #348628, 0px 2px 1px #348628, 0px -2px 1px #348628, 0px 4px 1px #1d4c16, 2px 4px 1px #1d4c16, -2px 4px 1px #1d4c16;
}

.footer-button button.goto-site:hover {
  top: 2px;
  box-shadow: 0 4px 0 #348628, 0 6px 1px 1px rgba(0, 0, 0, .3), 0 8px 0 5px #2a6d20, 0 10px 0 5px #39822e, 0 13px 0 5px #1d4c16, 0 13px 1px 6px rgba(0, 0, 0, .3);
}

.footer-button button.twitter-share-button {
  background: repeating-linear-gradient( 45deg, #3ebbf7, #3ebbf7 5px, #45b1f4 5px, #45b1f4 10px);
  box-shadow: 0 6px 0 #266b91, 0 8px 1px 1px rgba(0,0,0,.3), 0 10px 0 5px #12517d, 0 12px 0 5px #1a6b9a, 0 15px 0 5px #0c405e, 0 15px 1px 6px rgba(0,0,0,.3);
  border-bottom: 3px solid rgba(16, 91, 146, 0.5);
  text-shadow: 2px 2px 1px #0066a2, -2px 2px 1px #0066a2, 2px -2px 1px #0066a2, -2px -2px 1px #0066a2, 0px 2px 1px #0066a2, 0px -2px 1px #0066a2, 0px 4px 1px #004a87, 2px 4px 1px #004a87, -2px 4px 1px #004a87;
}
.footer-button button.twitter-share-button:hover {
  top:2px;
  box-shadow: 0 4px 0 #266b91, 0 6px 1px 1px rgba(0,0,0,.3), 0 8px 0 5px #12517d, 0 10px 0 5px #1a6b9a, 0 13px 0 5px #0c405e, 0 13px 1px 6px rgba(0,0,0,.3);
}

.footer-button button.twitter-hashtag-button {
  background: repeating-linear-gradient( 45deg, #3ebbf7, #3ebbf7 5px, #45b1f4 5px, #45b1f4 10px);
  box-shadow: 0 6px 0 #266b91, 0 8px 1px 1px rgba(0,0,0,.3), 0 10px 0 5px #12517d, 0 12px 0 5px #1a6b9a, 0 15px 0 5px #0c405e, 0 15px 1px 6px rgba(0,0,0,.3);
  border-bottom: 3px solid rgba(16, 91, 146, 0.5);
  text-shadow: 2px 2px 1px #0066a2, -2px 2px 1px #0066a2, 2px -2px 1px #0066a2, -2px -2px 1px #0066a2, 0px 2px 1px #0066a2, 0px -2px 1px #0066a2, 0px 4px 1px #004a87, 2px 4px 1px #004a87, -2px 4px 1px #004a87;
}
.footer-button button.twitter-hashtag-button:hover {
  top:2px;
  box-shadow: 0 4px 0 #266b91, 0 6px 1px 1px rgba(0,0,0,.3), 0 8px 0 5px #12517d, 0 10px 0 5px #1a6b9a, 0 13px 0 5px #0c405e, 0 13px 1px 6px rgba(0,0,0,.3);
}

 a {
  color: white;
  text-decoration: none;
}

@media screen and (max-width: 1400px) {
  .modal-container {
    width: 90%;
  }
}

@media screen and (max-width: 1200px) {
  .modal-container {
    width: 70%;
  }
}

@media screen and (max-width: 900px) {
  .modal-container {
    width: 90%;
  }
}
</style>
