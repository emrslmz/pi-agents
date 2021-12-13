<template>

</template>

<style scoped>

.question-options button {
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
  min-width: 90px;
  min-height: 30px;
  margin: 0 5px 0 5px;
  border-radius: 16px;
  text-decoration: none;
  font-weight:400;
  color:#FFFFFF;
  position: relative;
}

.question-options button:hover {
  opacity: 1;
  transition: 0.4s;
  top: 0.1em;
}


.option-definitely-yes {
  background-image: linear-gradient(to top, #0ba360 0%, #3cba92 100%);
}

.option-yes {
  background-image: linear-gradient(60deg, #96deda 0%, #50c9c3 100%);
}

.option-sometimes {
  background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
}

.option-rarely {
  background-image: linear-gradient(-20deg, #2b5876 0%, #4e4376 100%);
}

.option-no {
  background-image: linear-gradient(-20deg, #fc6076 0%, #ff9a44 100%);
}

.option-definitely-no {
  background-image: linear-gradient(to right, #f9d423 0%, #ff4e50 100%);
}

.try-again-button {
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
  box-shadow:inset 0 -0.6em 0 -0.35em rgba(0,0,0,0.17);
  text-align:center;
  position:relative;
}
</style>
