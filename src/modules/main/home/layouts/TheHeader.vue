<template>
  <div>
    <nav class="navbar navbar-expand-lg">
      <div class="d-flex align-items-end">
        <img class="pi-agents-logo" src="/assets/img/icon/pi_agents_logo_black.png" />
      </div>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars"></i>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="navbar-nav mr-auto"></div>
        <div class="navbar-right d-md-flex justify-content-center align-items-center">
          <router-link to="/">
            <p class="navbar-item mt-3 mt-md-0">Ana Sayfa </p>
          </router-link>
          <router-link to="/survey">
            <p class="navbar-item mt-3 mt-md-0">Anketler </p>
          </router-link>
          <p class="navbar-item__user mt-3 mt-md-0" @click="setUserInfoModal(true)">
            <i class="far fa-user-circle"></i>
            <small class="pl-2" v-if="userName === ''"> İsminizi ögrenebilir miyim?</small>
            <small class="pl-2" v-else> Merhaba, {{ userName }} </small>
          </p>

        </div>
      </div>

    </nav>
    <user-info-modal v-if="this.userInfoModal" @close="setUserInfoModal()" />

  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'TheHeader',
  components: {
    UserInfoModal: () => import('@/modules/main/components/modals/UserInfoModal.vue'),
  },
  computed: {
    ...mapState('Home', ['userName', 'userInfoModal']),
  },
  methods: {
    ...mapActions('Home', ['setUserName', 'setUserInfoModal']),
  },
  created() {
    if (localStorage.getItem('userName')) {
      this.setUserName(localStorage.getItem('userName'));
      this.name = this.userName;
    }
  }
};
</script>

<style scoped>
.navbar {
  color: #191919;
  font-family: PassionOne, sans-serif;
  -webkit-user-select: none;  /* Chrome all / Safari all */
  -moz-user-select: none;     /* Firefox all */
  -ms-user-select: none;      /* IE 10+ */
  user-select: none;
}

a {
  color: #191919;
  text-decoration: none;
}

.navbar-item {
  padding: 0 10px 0 10px;
  opacity: 0.9;
  transition: 0.2s;
  border-top: none;
  border-right: none;
  border-left: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-width: 120px;
  min-height: 40px;
  margin: 0 5px 0 5px;
  border-radius: 16px;
  text-decoration: none;
  font-weight:400;
  color: #191919;
  background-color: white;
  position:relative;
}


.navbar-item__user {
  background-color: #9bdc28;
  min-width: 150px;
  min-height: 40px;
  border-radius: 16px;
  box-shadow: inset 0 -0.6em 0 -0.35em rgba(0,0,0,0.17);
  padding: 0 10px 0 10px;
  transition: 0.2s;
  border-top: none;
  border-right: none;
  border-left: none;
  cursor: pointer;
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 0 5px 0 5px;
  text-decoration: none;
  color:#FFFFFF;
  text-align:center;
  position:relative;
}


.navbar-item__user:hover {
  top: 0.1em;
}

.pi-agents-logo {
  transition: 0.5s;
  width: 120px;
}

.pi-agents-logo:hover {
  transition: 0.5s;
  transform: skewY(-4deg);
}
</style>
