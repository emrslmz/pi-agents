<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-card">
          <img class="pi-agents-logo" src="/assets/img/icon/walking_man_with_wood.gif" />
          <div class="text-center">
            <h2>Hey,</h2>
            <p>seni tanımamız için ismini yaz!</p>
            <input class="modal__input" placeholder="Bir isim gir!" v-model="name" type="text" />
            <div>
              <button class="btn modal__button modal__button-danger" @click="$emit('close')">Kapat <i class="fas fa-times-circle"></i></button>
                <button class="btn modal__button" v-if="name.length > 2" @click="setGO(name)">Devam <i class="fas fa-chevron-circle-right"></i></button>
            </div>
          </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'UserInfoModal',
  data() {
    return {
      name: '',
    };
  },
  computed: {
    ...mapState('Home', ['userName', 'userInfoModal']),
  },
  methods: {
    ...mapActions('Home', ['setUserName']),
    setGO(name) {
      this.$emit('close');
      this.setUserName(name);
    }
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
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
  -webkit-user-select: none;  /* Chrome all / Safari all */
  -moz-user-select: none;     /* Firefox all */
  -ms-user-select: none;      /* IE 10+ */
  -o-user-select: none;
  user-select: none;
}

.modal-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;

}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  margin: 0 auto;
  width: 30%;
  min-height: 600px;
  border-radius: 60px 45px 30px 15px/15px 30px 45px 60px;
  background-color: white;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: start;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
}

.modal__input{
  outline: 0;
  border: none;
  padding-left: 20px;
  font-weight: bold;
  background-color: #F5F8FA;
  width: 300px;
  height: 45px;
  border-radius: 8px;
}

.modal__button {
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
  background-color: #9bdc28;
  box-shadow:inset 0 -0.6em 0 -0.35em rgba(0,0,0,0.17);
  text-align:center;
  position:relative;
}

.modal__button:active {
  top: 0.1em;
}

.modal_button-primary {
  background-image: radial-gradient(circle 248px at center, #16d9e3 0%, #30c7ec 47%, #46aef7 100%);
  transition: 0.5s;
}
.modal_button-primary:hover {
  background-image: radial-gradient(circle 248px at center, #79e8ed 0%, #30c7ec 47%, #46aef7 100%);
  transition: 0.5s;
}

.modal__button-danger {
  background-image: radial-gradient(circle 248px at center, #f14c74 0%, #f42a5a 47%, #8a1b35 100%);
  transition: 0.5s;
}

.modal__button-danger:hover {
  background-image: radial-gradient(circle 248px at center, #f76b8c 0%, #f42a5a 47%, #8a1b35 100%);
  transition: 0.5s;
}

.pi-agents-logo {
  padding-top: 10px;
  transition: 0.5s;
  width: 400px;
}

@media screen and (max-width: 420px) {
  .pi-agents-logo {
    width: 300px;
  }
}

@media screen and (max-width: 670px) {
  .modal-container {
    width: 90%;
  }
}


</style>
