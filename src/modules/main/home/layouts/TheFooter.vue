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
        <div class="d-flex justify-content-around align-items-around text-center footer-right pt-5">
          <div class="d-flex flex-column">
            <h6>COMPANY</h6>
            <small><a href="https://oyuncudefteri.com" target="_blank"><i class="fas fa-link"></i> Oyuncudefteri.com</a></small>
          </div>

          <div class="d-flex flex-column">
            <h6>PRODUCT</h6>
            <small><router-link to="/how-it-works">How It Works?</router-link></small>
            <small><router-link to="/about">About</router-link></small>
          </div>

          <div class="d-flex flex-column">
            <h6>RESOURCES</h6>
            <small><router-link to="/resources">Sounds, pics and more</router-link></small>
          </div>

          <div class="d-flex flex-column">
            <h6>MORE</h6>
            <small><a href="https://sound-air.herokuapp.com" target="_blank"><i class="fas fa-link"></i> Sound AIR</a></small>
            <small><a href="https://aim-side.herokuapp.com" target="_blank"><i class="fas fa-link"></i> Aim Side</a></small>
            <small><a href="https://oyuncudefteri.com" target="_blank"><i class="fas fa-link"></i> Oyuncudefteri.com</a></small>
            <small><i class="fas fa-link"></i> Guess Rank <span class="badge badge-secondary">Soon</span></small>
          </div>

        </div>
        <div class="text-center d-flex flex-column justify-content-center align-items-center footer-terms">
          <div class="custom-hr"></div>
          <small class="text-center pt-2"><router-link to="conditions">Terms and conditions</router-link></small>
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
  height: 35vh;
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

.footer-right {
  color: #666F83;
}

.footer-right a {
  color: #666F83;
}


.footer-terms a {
  color: #666F83;
}

.pi-agents-logo {
  transition: 0.5s;
  width: 120px;
}

.pi-agents-logo:hover {
  transition: 0.5s;
  transform: skewY(-4deg);
}

.custom-hr {
  width: 100px;
  border-top: 1px solid #666F83;
  border-right: none;
  border-bottom: none;
  border-left: none;
}

.show button {
  background-color: #d42053;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  transition: 0.4s;
}

.show button:after {
  background-color: #d42053;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  transition: 0.4s;
}

.router-link-active span button {
  background-color: #d42053;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  transition: 0.4s;
  text-decoration: none;
}

.router-link-active button {
  background-color: #d42053;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  transition: 0.4s;
  text-decoration: none;
}


.router-link-active span {
  background-color: #d42053;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  transition: 0.4s;
  text-decoration: none;
}
</style>
