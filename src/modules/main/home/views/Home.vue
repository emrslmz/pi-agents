<template>
  <div>
   <div class="app">
     <the-header v-if="$route.name !== 'HomePage'" />
     <home-page v-if="$route.name === 'HomePage'"  />
     <router-view />
     <the-footer />
   </div>
  </div>
</template>

<script>
export default {
  components: {
    TheHeader: () => import('@/modules/main/home/layouts/TheHeader.vue'),
    HomePage: () => import('@/modules/main/home/components/HomePage.vue'),
    TheFooter: () => import('@/modules/main/home/layouts/TheFooter.vue'),
  },
};
</script>

<style scoped>
.app {
  /*background-color: #E9E9E9;*/
  background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
  min-height: 100vh;
  width: 100%;
}
</style>
