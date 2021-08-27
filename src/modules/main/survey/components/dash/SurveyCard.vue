<template>
  <div class="container">
    <div class="card">
      <div class="card-image">
        <img :src="`assets/img/images/${image}`" />
      </div>
      <div class="card-content">
        <h2>{{ name }}</h2>
        <div class="card-content__question">
          <h3>Soru Sayısı: <b>7</b></h3>
        </div>
        <div class="card-content__time">
          <h3>Süre: <b>5 min.</b></h3>
        </div>
      <div class="card-content__button">
        <router-link :to="{ name: 'SurveySide', params: { id }} ">
          <span>Şimdi başla</span>
        </router-link>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SurveyCard',
  props: ['id', 'name', 'minName', 'image', 'color'],
};
</script>

<style scoped>
.container{
  position: relative;
}

.container .card{
  position: relative;
  width: 320px;
  height: 450px;
  background: #232323;
  border-radius: 20px;
  overflow: hidden;
  border: 2px solid #191919;
}

.container .card:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #9bdc28;
  clip-path: circle(150px at 80% 20%);
  transition: 0.5s ease-in-out;
}

.container .card:hover:before{
  clip-path: circle(300px at 80% -20%);
}

.container .card:after{
  content: ''; /* text */
  position: absolute;
  top: 30%;
  left: -20%;
  font-size: 12em;
  font-weight: 800;
  font-style: italic;
  color: rgba(255,255,25,0.05)
}

.container .card .card-image{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10000;
  width: 100%;
  height: 220px;
  transition: 0.5s;
}

.container .card:hover .card-image{
  top: 0;
  transform: translateY(0%);

}

.container .card .card-image img{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) ; /*rotate(-25deg)*/
  width: 190px;
}

.container .card .card-content{
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  text-align: center;
  transition: 1s;
  z-index: 10;
}

.container .card:hover .card-content{
  height: 210px;
}

.container .card .card-content h2{
  position: relative;
  font-weight: 600;
  letter-spacing: 1px;
  color: #fff;
  margin: 0;
}

.container .card .card-content .card-content__question, .container .card .card-content .card-content__time {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 8px 0 20px;
  transition: 0.5s;opacity: 0;
  visibility: hidden;
}

.container .card:hover .card-content .card-content__question {
  opacity: 1;
  visibility: visible;
  transition-delay: 0.5s;
}

.container .card:hover .card-content .card-content__time {
  opacity: 1;
  visibility: visible;
  transition-delay: 0.6s;
}

.card-content__question h3 {
  color: white;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-right: 10px;
}

.card-content__time h3 {
  color: white;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-right: 10px;
}

.container .card .card-content a{
  display: inline-block;
  padding: 10px 20px;
  background: #fff;
  border-radius: 4px;
  margin-top: 10px;
  text-decoration: none;
  font-weight: 600;
  color: #111;
  opacity: 0;
  transform: translateY(50px);
  transition: 0.5s;
}

.container .card:hover .card-content a {
  opacity: 1;
  transform: translateY(0px);
  transition-delay: 0.75s;
}
</style>
