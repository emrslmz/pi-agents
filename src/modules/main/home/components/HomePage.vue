<template>
  <div class="page-container">
    <div class="page-header">
      <h1>Size en Cok benzeyen Karakter hangisi?</h1>
      <p>Anketlerimizi bitirerek, karakter yapınızı daha derinden tanıyın!</p>
    </div>
    <div class="page-header__canvas"></div>
    <div class="page-content container">
      <div class="page-content__img">
        <img width="400px" src="/assets/img/images/valorant_agents2.jpg" alt="jousto" />
      </div>
      <div class="page-content__text">
        <h3>En güncel oyunlara dair anketleri tamamla!</h3>
        <ul>
          <li>Eglenceli zaman geçir</li>
          <li>Karakteristik özelliklerini ögren</li>
          <li>Anketler sonunda çıkan Ajanı arakadaslarınla karsılastır</li>
        </ul>
      </div>
    </div>
    <div class="page-content container">
      <div class="page-content__text">
        <h3>Kisiliginin hangi karaktere benzedigini ögren!</h3>
        <ul>
          <li>Istedigin platformda,</li>
          <li>Istedigin zamanda,</li>
          <li>Istedigin oyunla basla!</li>
        </ul>
      </div>
      <div class="page-content__img">
        <img width="200px" src="/assets/img/images/gta5_cover.jpg" alt="jousto" />
      </div>
    </div>
    <div class="page-footer">
      <div>
        <h1><i class="fas fa-angle-double-down"></i> HEMEN BASLA! <i class="fas fa-angle-double-down"></i></h1>
      </div>
      <router-link to="/survey">
        <button class="btn play-button"><i class="fas fa-play"></i> OYNA</button>
      </router-link>
      <router-link to="/conditions">
        <small>Sartlar gecerlidir</small>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePages',
};
</script>

<style scoped>
.page-container {
  min-height: 100vh;
  width: 100%;
  font-family: PassionOne, sans-serif;
  background: top/cover no-repeat;
  background-size: 100%;
}

.page-header {
  background-color: #FED96A;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.page-header p {
  font-style: italic;
  font-size: 18px;
}

.page-header__canvas {
  height: 5vh;
  border-top: 2.5vh solid #e0bf5c;
  background-color: #c2a54f;
}

.page-content {
  padding-top: 80px;
  display: flex;
  justify-content: space-around;
  align-items: start;
}

.page-content__img {
  background: top/cover no-repeat;
  background-size: 100%;
  transition: 0.5s;
  margin: 20px 0 20px 0;
}

.page-content__img img {
  border-radius: 30px;
}

.play-button {
  font-weight: bold;
  background-color: lightgray;
  width: 200px;
  height: 50px;
  text-shadow: -1px -1px #b8b4b4, 1px 1px white;
  color: gray;
  font-size: 20px;
  border-radius: 7px;
  box-shadow: 0 .2em gray;
  -webkit-user-select: none;  /* Chrome all / Safari all */
  -moz-user-select: none;     /* Firefox all */
  -ms-user-select: none;      /* IE 10+ */
  user-select: none;
  font-family: sans-serif;
}

.play-button:active {
  box-shadow: none;
  position: relative;
  top: .2em;
}

.play-button:hover {
  box-shadow: none;
  position: relative;
  top: .2em;
  color: #ffb700;
}

.page-footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 15px 0 50px 0;
}

.page-footer a {
  padding-bottom: 5px;
  color: #575757;
}

</style>
