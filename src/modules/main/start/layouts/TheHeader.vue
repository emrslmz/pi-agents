<template>
  <div>
    <nav class="navbar navbar-expand-lg">
      <div class="d-flex align-items-end"><h3>π</h3> <h5>agents</h5></div>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars"></i>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="navbar-nav mr-auto"></div>
        <div class="navbar-right">
          <router-link to="/home">
            <h5 class="navbar-item">Ana Sayfa </h5>
          </router-link>
          <router-link to="/survey">
            <h5 class="navbar-item">Anketler </h5>
          </router-link>
         <router-link to="/faq">
           <h5 class="navbar-item">SSS</h5>
         </router-link>
            <h5 class="navbar-item" @click="setUserInfoModal()"><i class="far fa-user-circle"></i></h5>
        </div>
      </div>

    </nav>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'TheHeader',
  methods: {
    ...mapActions('Start', ['setUserInfoModal']),
  }
};
</script>

<style scoped>
.navbar {
  color: white;
  background-color: #191919;
}
a {
  color: white;
  text-decoration: none;
}

.navbar-right {
  display: flex;
  justify-content: center;
  align-items: center;
}

.navbar-item {
  padding: 0 10px 0 10px;
  opacity: 0.5;
  transition: 0.2s;
  border-top: none;
  border-right: none;
  border-left: none;
  cursor: pointer;
}

.navbar-item:hover {
  opacity: 1;
  transition: 0.4s;
}

</style>
