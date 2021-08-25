<template>
  <div>
    <survey-page v-if="$route.name === 'SurveyPage'" />
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'SurveyHome',
  components: {
    SurveyPage: () => import('@/modules/main/survey/components/SurveyPage.vue'),
  }
};
</script>
