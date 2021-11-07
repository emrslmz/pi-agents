<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container text-center">
        <div v-for="(agent, index) in filterAgents" :key="index" v-show="userPoint === agent.agentId">

         <div class="d-flex flex-column" v-if="loadingCounter">

           <div class="agent-container">
             <div class="agent-container-left">
               <img class="agent-picture" :src="'/assets/img/agents/'+ agent.agentPicture" :alt="agent.name" :title="agent.name" />
               <div class="agent-info text-left">
                 <h6><i class="fas fa-info-circle"></i> Karakter hakkında bazı bilgiler!</h6>
                 <p><i class="fas fa-barcode"></i> {{ agent.name }} karakterine sahip olan kişiler<span class="blur-text"> gerçekten çok önemli bir ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus ac nisi ut malesuada. Ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus ac nisi ut malesuada... </span><a
                     href="https://oyuncudefteri.com" target="_blank"><i>devamını okumak için tıklayın</i></a></p>
                 <p><i class="fas fa-user-friends"></i> Seninle beraber {{ agent.numberHave }} kişi aynı kişiliğe sahip!</p>
                 <p><i class="fas fa-gavel"></i> Kişiliğin hakkında daha fazla bilgiye <a href="https://oyuncudefteri.com" target="_blank"> erişmek için tıkla!</a></p>
               </div>

             </div>
             <div class="agent-container-right">
               <div class="agent-container-rightItem">
                 <h5><i class="fas fa-crown"></i> {{ agent.name }} karakterine benziyorsun!</h5>
               </div>
               <div class="agent-container-rightItem" v-for="(result, index) in filterSurveyResult" :key="index">
                 {{ result.name }} <i :class="result.icon"></i>
                 <div class="progress" :style="result.style">
                   <div class="progress-bar" :class="result.class"  role="progressbar" :style="{'width': Math.floor(Math.random() * 70) + 20 + '%' }" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                 </div>
               </div>
             </div>
           </div>
           <div>
             <button class="btn modal__button bg-primary" @click="closeModal">Kapat <i class="fas fa-times-circle"></i></button>
             <a href="https://oyuncudefteri.com" target="_blank"><button class="btn modal__button bg-success">Bana bu karakteri anlat! <i class="fas fa-gavel"></i></button></a>
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
    }
  },
  methods: {
    closeModal() {
      this.$emit('close');
      this.$confetti.stop();
    },
  },
  async created() {
    this.userPoint = await Math.floor(Math.random() * 10 + 1);
    this.$confetti.start();

    setTimeout(() => {
      this.loadingCounter = true;
    }, 2000);

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
  width: 60%;
  min-height: 80%;
  margin: 0 auto;
  padding: 20px 30px;
  border-radius: 15px;
  background-color: white;
  transition: all 0.3s ease;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
}

.modal__button {
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

.agent-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.agent-container-left {
  width: 100%;
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

.agent-picture {
  width: auto;
  height: 500px;
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
</style>
