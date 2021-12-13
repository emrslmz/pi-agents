<template>
  <div>
    <div class="card" :class="survey.active ? '' : 'card__disabled'">
      <div class="card-image">
        <img :src="`assets/img/images/${survey.image}`" />
      </div>
      <div class="card-content">
        <h2>{{ survey.name }}</h2>
        <div class="card-content__question">
          <h4>Soru Sayısı: <b>{{ getInfoSurvey.length }}</b></h4>
        </div>
        <div class="card-content__time">
          <h4>Süre: <b>{{ getInfoSurvey.length > 3 ? getInfoSurvey.length - 3 : getInfoSurvey.length}} dk.</b></h4>
        </div>
        <div :disabled="!survey.active">
          <router-link :class="survey.active ? '' : 'cursor_notAllowed'" :to="survey.active ? { name: 'SurveySide', params: { id }} : ''">
            Simdi basla
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'SurveyCard',
  props: ['id', 'survey'],
  computed: {
    ...mapState('Survey', ['surveyQuestions']),
    getInfoSurvey() {
     return this.surveyQuestions.filter(s => s.surveyId === this.id);
    }
  }

};
</script>

<style scoped>

.cursor_notAllowed {
  cursor: not-allowed;
}

.container .card {
  position: relative;
  width: 320px;
  height: 550px;
  background: #232323;
  border-radius: 20px;
  overflow: hidden;
  border: 2px solid white;
  margin: 40px;
  /*box-shadow: 0 0 10px 5px white;*/
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
}

.card__disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.container .card:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #c2a54f;
  clip-path: circle(150px at 80% 20%);
  transition: 0.5s ease-in-out;
}

.container .card:hover:before{
  clip-path: circle(300px at 80% -20%);
}

.container .card:after{
  content: ''; /* text */
  position: absolute;
  top: 30%;
  left: -20%;
  font-size: 12em;
  font-style: italic;
  color: rgba(255,255,25,0.05)
}

.container .card .card-image{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 99;
  width: 100%;
  height: 150px;
  transition: 0.5s;
}

.container .card:hover .card-image {
  top: 0;
  transform: translateY(60%);
}

.container .card .card-image img {
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%) ; /*rotate(-25deg)*/
  width: 190px;
}

.container .card .card-content{
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  text-align: center;
  transition: 1s;
  z-index: 10;
}

.container .card:hover .card-content{
  height: 200px;
}

.container .card .card-content h2 {
  position: relative;
  letter-spacing: 1px;
  color: #fff;
  margin: 0;
}

.container .card .card-content .card-content__question, .container .card .card-content .card-content__time {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 8px 0 20px;
  transition: 0.5s;opacity: 0;
  visibility: hidden;
}

.container .card:hover .card-content .card-content__question {
  opacity: 1;
  visibility: visible;
  transition-delay: 0.5s;
}

.container .card:hover .card-content .card-content__time {
  opacity: 1;
  visibility: visible;
  transition-delay: 0.6s;
}

.card-content__question h4 {
  color: white;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-right: 10px;
}

.card-content__time h4 {
  color: white;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-right: 10px;
}

.container .card .card-content a {
  display: inline-block;
  padding: 10px 20px;
  background: #fff;
  border-radius: 4px;
  margin-top: 10px;
  text-decoration: none;
  color: #111;
  opacity: 0;
  transform: translateY(50px);
  transition: 0.5s;
}

.container .card:hover .card-content a {
  opacity: 1;
  transform: translateY(0px);
  transition-delay: 0.75s;
}



</style>
