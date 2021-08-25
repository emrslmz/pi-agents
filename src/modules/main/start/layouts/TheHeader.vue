<template>
  <div>
    <nav class="navbar navbar-expand-lg container">
      <div class="d-flex align-items-end"><h3>π</h3> <h5>agents</h5></div>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars"></i>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="navbar-nav mr-auto"></div>
        <div class="navbar-right">
          <router-link to="/home">
            <p class="navbar-item">Ana Sayfa </p>
          </router-link>
          <router-link to="/survey">
            <p class="navbar-item">Anketler </p>
          </router-link>
         <router-link to="/faq">
           <p class="navbar-item">SSS</p>
         </router-link>
            <p class="navbar-item" @click="setUserInfoModal()"><i class="far fa-user-circle"></i></p>
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
  color: #191919;
}

a {
  color: #191919;
  text-decoration: none;
}

.navbar-right {
  display: flex;
  justify-content: center;
  align-items: center;
}

.navbar-item {
  padding: 0 10px 0 10px;
  opacity: 0.7;
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
