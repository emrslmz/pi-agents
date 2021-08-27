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
            <p class="navbar-item">Ana Sayfa </p>
          </router-link>
          <router-link to="/survey">
            <p class="navbar-item">Anketler </p>
          </router-link>
         <router-link to="/faq">
           <p class="navbar-item">SSS</p>
         </router-link>
            <p class="navbar-item navbar-item__user" @click="setUserInfoModal(true)">
              <i class="far fa-user-circle"></i>
              <small class="pl-2" v-if="userName === ''"> İsminizi öğrenebilir miyim?</small>
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
    UserInfoModal: () => import('@/modules/main/home/components/modals/UserInfoModal.vue'),
  },
  computed: {
    ...mapState('Start', ['userName', 'userInfoModal']),
  },
  methods: {
    ...mapActions('Start', ['setUserName', 'setUserInfoModal']),
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
  display: flex;
  justify-content: start;
  align-items: center;
}

.navbar-item:hover {
  opacity: 1;
  transition: 0.4s;
}

.navbar-item__user {
  background-color: #9bdc28;
  min-width: 200px;
  min-height: 40px;
  border-radius: 16px;

}
</style>
