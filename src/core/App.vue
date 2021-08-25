<template>
 <div class="app">
   <router-view />
 </div>
</template>

<script>
export default {
  name: 'App',
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
