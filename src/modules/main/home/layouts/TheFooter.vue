<template>
  <footer>
    <div class="footer">
      <div class="px-3 pt-2 text-white footer">
        <div class="d-flex justify-content-between align-items-center">
          <div class="footer-left">
            <router-link to="/">
              <img class="pi-agents-logo" src="/assets/img/icon/pi_agents_logo_white.png" />
            </router-link>
          </div>
          <div class="d-flex flex-column">
            <small>Designed by Emre ᔕolmaz in Istanbul. </small>
            <small>All rights reserved. Copyright 2021 ©</small>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #191919;
  width: 100%;
  bottom: 0;
  left: 0;
  height: 8vh;
  border-top: 5px solid #FED96A;
  border-right: none;
  border-bottom: none;
  border-left: none;
  -webkit-user-select: none;  /* Chrome all / Safari all */
  -moz-user-select: none;     /* Firefox all */
  -ms-user-select: none;      /* IE 10+ */
  user-select: none;
}

.footer-social i {
  color: #d3d3d3;
}

.footer-left a {
  color: #FFF;
  text-decoration: none;
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
