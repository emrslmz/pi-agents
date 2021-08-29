<template>
  <div>
    <the-header v-if="$route.name !== 'StartPage'" />
    <router-view />
    <home-page v-if="$route.name === 'StartPage'" />
    <the-footer v-if="$route.name !== 'StartPage'" />
  </div>
</template>

<script>
export default {
  components: {
    TheHeader: () => import('@/modules/main/start/layouts/TheHeader.vue'),
    HomePage: () => import('@/modules/main/start/components/StartPage.vue'),
    TheFooter: () => import('@/modules/main/start/layouts/TheFooter.vue'),
  },
};
</script>
