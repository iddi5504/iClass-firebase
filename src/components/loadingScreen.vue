<template>
  <div class="loadingScreen">
    <div class="d-flex flex-column align-items-center">
        <span class="loader"></span>
        <div class="message">{{message}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props:['message']

}
</script>

<style scoped>
.loadingScreen{
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #0000005e;
  font-size: 1.5rem;
}
.loader{
  width: 50px;
  height: 50px;
  border:5px solid transparent;
  border-top-color:#fff;
  border-bottom-color:#fff;
  animation: spin 1s ease-in-out infinite;
  border-radius: 50%;
  display: block;
  padding: 10px;
}

@keyframes spin{
  to{
      transform: rotateZ(360deg);
  }
}
</style>