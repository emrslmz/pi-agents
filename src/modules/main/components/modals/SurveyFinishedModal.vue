<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-card">
          <div class="text-center">
              <button class="btn modal__button modal__button-danger" @click="$emit('close')">Kapat <i class="fas fa-times-circle"></i></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FinishedModal',
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
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 500px;
  min-height: 400px;
  margin: 0 auto;
  padding: 20px 30px;
  border-radius: 15px;
  background-color: white;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
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
  background-color:#3369ff;
  box-shadow:inset 0 -0.6em 0 -0.35em rgba(0,0,0,0.17);
  text-align:center;
  position:relative;
}

</style>
