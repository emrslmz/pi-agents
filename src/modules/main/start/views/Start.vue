<template>
  <div>
    <router-view />
      <home-page v-if="$route.name === 'HomePage'" />
  </div>
</template>

<script>
export default {
  components: {
    HomePage: () => import('@/modules/main/start/components/StartPage.vue'),
  }
};
</script>
