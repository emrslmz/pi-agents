<template>
  <div>
    <div class="thumb">
    <a href="#">
      <span>the optimist lives on</span>
    </a>
    </div>
  </div>
</template>


<style scoped>
.thumb {
  width: 400px;
  height: 300px;
  margin: 70px auto;
  perspective: 1000px;
}

.thumb a {
  display: block;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
  url("https://img.fanatik.com.tr/img/78/740x418/60b78234ae298b9ede8dc535.jpg");
  background-size: 0, cover;
  transform-style: preserve-3d;
  transition: all 0.5s;
}

.thumb:hover a {
  transform: rotateX(80deg);
  transform-origin: bottom;
}
.thumb a:after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 36px;
  background: inherit;
  background-size: cover, cover;
  background-position: bottom;
  transform: rotateX(90deg);
  transform-origin: bottom;
}
.thumb a span {
  color: white;
  text-transform: uppercase;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  font: bold 12px/36px "Open Sans";
  text-align: center;
  transform: rotateX(-89.99deg);
  transform-origin: top;
  z-index: 1;
}
.thumb a:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 100px 50px rgba(0, 0, 0, 0.5);
  transition: all 0.5s;
  opacity: 0.15;
  transform: rotateX(95deg) translateZ(-80px) scale(0.75);
  transform-origin: bottom;
}

.thumb:hover a:before {
  opacity: 1;
  box-shadow: 0 0 25px 25px rgba(0, 0, 0, 0.5);
  transform: rotateX(0) translateZ(-60px) scale(0.85);
}

.menu-header__image {
  background: top/cover no-repeat;
  background-size: 100%;
  transition: 0.5s;
  width: 100%;
  height: 900px;
}


@media (max-width: 800px) { /* if screen max-width 800px */
  .menu-header__image {
    background-size: 200%;
    transition: 0.5s;
    width: auto;
    height: 250px;
  }
}


.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 4rem 5vw;
  padding: 0;
  list-style-type: none;
}

.card {
  position: relative;
  display: block;
  height: 100%;
  border-radius: calc(var(--curve) * 1px);
  overflow: hidden;
  text-decoration: none;
}

.card__image {
  width: 100%;
  height: auto;
}

.card__overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  border-radius: calc(var(--curve) * 1px);
  background-color: var(--surface-color);
  transform: translateY(100%);
  transition: .2s ease-in-out;
}

.card:hover .card__overlay {
  transform: translateY(0);
}

.card__header {
  position: relative;
  display: flex;
  align-items: center;
  gap: 2em;
  padding: 2em;
  border-radius: calc(var(--curve) * 1px) 0 0 0;
  background-color: var(--surface-color);
  transform: translateY(-100%);
  transition: .2s ease-in-out;
}

.card__arc {
  width: 80px;
  height: 80px;
  position: absolute;
  bottom: 100%;
  right: 0;
  z-index: 1;
}

.card__arc path {
  fill: var(--surface-color);
  d: path("M 40 80 c 22 0 40 -22 40 -40 v 40 Z");
}

.card:hover .card__header {
  transform: translateY(0);
}

.card__thumb {
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.card__title {
  font-size: 1em;
  margin: 0 0 .3em;
  color: #6A515E;
}

.card__tagline {
  display: block;
  margin: 1em 0;
  font-family: "MockFlowFont";
  font-size: .8em;
  color: #D7BDCA;
}

.card__status {
  font-size: .8em;
  color: #D7BDCA;
}

.card__description {
  padding: 0 2em 2em;
  margin: 0;
  color: #D7BDCA;
  font-family: "MockFlowFont";
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}

</style>
