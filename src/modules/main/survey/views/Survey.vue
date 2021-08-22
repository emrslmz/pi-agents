<template>
  <div>
    <survey-card />
  </div>
</template>

<script>
export default {
  name: 'SurveyHome',
  components: {
    SurveyCard: () => import('@/modules/main/survey/components/SurveyCard.vue'),
  }
};
</script>
