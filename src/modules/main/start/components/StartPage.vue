<template>
  <div class="d-flex flex-column justify-content-center align-items-center start">
   <div class="start__text">
     <h2>Hey,</h2>
     <p>Başlamadan önce seni tanımamıza izin ver!</p>
   </div>
    <div class="d-flex flex-column justify-content-center align-items-center">
      <input class="start__input" placeholder="Bir isim gir!" v-model="userName" type="text" />
    </div>
    <div class="text-right" >
      <transition name="slide-fade">
       <router-link to="/home">
         <button class="btn start__button" v-if="userName.length > 2" @click="setUserName(userName)">Başlayalım <i class="fas fa-chevron-circle-right"></i></button>
       </router-link>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'StartPage',
  data() {
    return {
      userName: '',
    };
  },
  methods: {
    ...mapActions('Start', ['setUserName']),
  },
};
</script>

<style scoped>
.start {
  min-height: 90vh;
}

.start__input{
  outline: 0;
  border: none;
  padding-left: 20px;
  font-weight: bold;
  background-color: #F5F8FA;
  width: 300px;
  height: 45px;
  border-radius: 8px;
}

.start__button {
  background-image: radial-gradient(circle 248px at center, #16d9e3 0%, #30c7ec 47%, #46aef7 100%);
  margin: 15px;
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


.start__button:active {
  top: 0.1em;
}
/*@media all and (max-width:30em){*/
/*  .start__button {*/
/*    display:block;*/
/*    margin:0.4em auto;*/
/*    }*/
/*}*/

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>

