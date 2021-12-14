<template>
  <div class="advertisement-container">
    <img @click="show = false" class="advertisement-image" src="/assets/img/images/aim_side_advertisement.gif" v-if="number === 1 && show" />
    <img @click="show = false" class="advertisement-image" src="/assets/img/images/oyuncudefteri_advertisement.gif" v-if="number === 2 && show" />
    <img @click="show = false" class="advertisement-image" src="/assets/img/images/sound_air_advertisement.gif" v-if="number === 3 && show" />
  </div>
</template>

<script>
export default {
  name: 'AdvertisementBanner',
  data() {
    return {
      number: 1,
      show: true,
    };
  },
  async created() {
    this.number = await Math.floor(Math.random() * 3) + 1;  // 1 veya 2 çıkabilir
  }
};
</script>

<style scoped>
.advertisement-container {
  z-index: 600;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
}

.advertisement-image {
  width: 500px;
  height: auto;
}

@media screen and (max-width: 720px) {
  .advertisement-image {
    width: 400px;
  }
}

@media screen and (max-width: 550px) {
  .advertisement-image {
    width: 300px;
  }
}
</style>
