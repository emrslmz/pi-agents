<template>
  <div>
    <div class="d-flex flex-column page">
     <div class="page-header">
       <h3>Anketler</h3>
       <small>Ankete gitmek için bir kategori seç!</small>
     </div>
      <div class="container">
        <div class="page-content row d-flex justify-content-center align-items-center" v-if="userName">
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
          <the-card
              cardStyle="text-dark col-8 bg-warning"
              text="Başlamadan önce ismini gir!"
              :button="true"
              description="saaa"
              buttonText="İsim Gir"
              :leftSide="true"
              icon="fas fa-exclamation-circle"
              @buttonFunction="setUserInfoModal(true)"
          />
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
    TheCard: () => import('@/modules/components/TheCard.vue'),
  },
  computed: {
    ...mapState('Start', ['userName']),
    ...mapState('Survey', ['survey']),
  },
  methods: {
    ...mapActions('Start', ['setUserInfoModal'])
  }
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

.page-survey__card {
  padding: 50px 0 50px 0;
}

</style>
