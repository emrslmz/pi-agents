<template>
  <div>
    <div class="d-flex flex-column justify-content-center align-items-center page">
     <div class="page-header">
       <h3>Anketler</h3>
       <small>Ankete gitmek için bir kategori seç!</small>
     </div>
      <div class="container">
        <div class="page-content row d-flex justify-content-center align-items-center">
          <div class="col-4 page-survey__card" v-for="(sur, index) in survey" :key="index">
            <survey-card
                :id="sur.id"
                :name="sur.name"
                :minName="sur.minName"
                :image="sur.image"
                :color="sur.color"  />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'SurveyPage',
  components: {
    SurveyCard: () => import('@/modules/main/survey/components/dash/SurveyCard.vue'),
  },
  computed: {
    ...mapState('Survey', ['survey']),
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

.page-content {
  padding: 50px 0 0 0;
}

.page-survey__card {
  padding: 50px 0 50px 0;
}
</style>
