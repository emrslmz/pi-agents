<template>
  <div class="agent-container d-xl-flex justify-content-center align-items-center">
    <div class="agent-container-left">
      <img class="agent-picture" :src="'/assets/img/agents/'+ agent.agentPicture" :alt="agent.name" :title="agent.name" />
      <p class="py-3"><i class="fas fa-user-friends"></i> Seninle beraber {{ agent.numberHave }} kişi aynı kişiliğe sahip!</p>


    </div>
    <div class="agent-container-right">
      <div class="agent-container-rightItem">
        <h5><i class="fas fa-crown"></i> {{ agent.name }} karakterine benziyorsun!</h5>
      </div>
      <div class="agent-container-rightItem" v-for="(result, index) in filterSurveyResult" :key="index">
        {{ result.name }} <i :class="result.icon"></i>
        <div class="progress" :style="result.style">
          <div class="progress-bar" :class="result.class" role="progressbar" :style="{'width': result.ratio + '%' }" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">%{{ result.ratio }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

