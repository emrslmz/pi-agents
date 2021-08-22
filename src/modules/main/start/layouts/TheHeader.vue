<template>
  <div>
    <div class="header">
      <router-link to="/home">
        <button class="btn header__button bg-danger">Ana Sayfa </button>
      </router-link>
      <router-link to="/survey">
        <button class="btn header__button bg-primary">Anketler </button>
      </router-link>
      <button class="btn header__button bg-primary">SSS </button>
    </div>
  </div>
</template>


<style scoped>

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #191919;
  border-radius: 0 0 16px 16px;
}

.header__button {
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
  background-color:#3369ff;
  box-shadow:inset 0 -0.6em 0 -0.35em rgba(0,0,0,0.17);
  text-align:center;
  position:relative;
}

.header__button:active {
  top: 0.1em;
}

</style>
