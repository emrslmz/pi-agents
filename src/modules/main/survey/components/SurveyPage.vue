<template>
  <div>
    <div class="page">
      <div class="page-header">
        <h3>Anketler</h3>
        <div v-if="userName">
          <h6>Ankete gitmek için bir kategori seç!</h6>
        </div>
        <div class="d-flex flex-column justify-content-center" v-else>
          <h6>Mevcut anketleri görmek için gerekli bilgileri girmen gerekir!</h6>
          <button class="page-header__button btn" @click="setUserInfoModal(true)">İsminizi öğrenebilir miyim?</button>
        </div>
      </div>
      <div class="container">
        <div class="page-content row" v-if="userName">
          <div class="col-4 page-survey__card" v-for="(sur, index) in survey" :key="index">
            <survey-card
                :id="sur.id"
                :name="sur.name"
                :minName="sur.minName"
                :image="sur.image"
                :color="sur.color"  />
          </div>
        </div>
        <div v-else>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'SurveyPage',
  components: {
    SurveyCard: () => import('@/modules/main/survey/components/dash/SurveyCard.vue'),
  },
  computed: {
    ...mapState('Home', ['userName']),
    ...mapState('Survey', ['survey']),
  },
  methods: {
    ...mapActions('Home', ['setUserInfoModal'])
  },
};
</script>

<style scoped>
.page {
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 200px;
}

.page-header {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
}

.page-content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.page-survey__card {
  padding: 50px 0 50px 0;
}

.page-header__button {
  padding: 0 10px 0 10px;
  opacity: 0.9;
  transition: 0.2s;
  border-top: none;
  border-right: none;
  border-left: none;
  box-shadow: inset 0 -0.6em 0 -0.35em rgba(0,0,0,0.17);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-width: 120px;
  min-height: 40px;
  margin: 0 5px 0 5px;
  border-radius: 16px;
  text-decoration: none;
  font-weight: 400;
  color:#FFFFFF;
  background-color:#3369ff;
  position:relative;
}
</style>
