<template>
  <div class="d-flex justify-content-center align-items-center text-center">
    <div class="card" :class="cardStyle">
      <div class="card-body d-flex justify-content-start align-items-center">
        <div class="col-2" v-if="leftSide === true">
         <h1> <i :class="icon"></i></h1>
        </div>
        <div :class="leftSide === true ? 'col-8' : 'col-12'">
          <h5 class="card-title">{{ text }}</h5>
          <p class="card-text" v-if="button === true">
            <button class="btn card__button card__button-danger" @click="$emit('buttonFunction')">{{ buttonText }} <i class="fas fa-arrow-circle-right"></i></button>
          </p>
          <p class="card-text" v-else>
            {{ description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheCard',
  props: ['cardStyle', 'text', 'button' ,'buttonText', 'description', 'leftSide', 'icon', 'buttonFunction'],
};
</script>


<style scoped>
.card {
  border-radius: 16px;
}


.card__button {
  min-width: 150px;
  transition: 0.5s;
  display:inline-block;
  padding: 0.7em 1.4em;
  border-radius: 15px;
  text-decoration:none;
  text-transform: uppercase;
  font-weight:400;
  color:#FFFFFF;
  background-color:#3369ff;
  box-shadow:inset 0 -0.6em 0 -0.35em rgba(0,0,0,0.17);
  text-align:center;
  position:relative;
}

.card__button:active {
  top: 0.1em;
}
</style>
