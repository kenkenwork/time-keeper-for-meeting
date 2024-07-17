<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
// import InputView from './views/InputView.vue'


</script>

<template>
  <div id="container">
  <header>
    <h1>集会タイムキーパー</h1>
    <h2>生活と奉仕の集会</h2>
  </header>

<RouterView />


<footer>
  © 2024 KENRO
</footer>
</div>
</template>

<style scoped>

* {
  margin: 0;
  width: 390px;
  text-align: center;
  background-color: black;
  color: white;
}

#container {
  background-color: black;
  color: white;
  box-sizing: border-box;
}

h1 {
  margin: 0;
  padding: 10px 0;
  font-size: 20px;
  background-color: rgb(71, 69, 69);
}

h2 {
  font-size: 15px;
  padding: 5px 0;
  color: rgb(188, 177, 252);
  border-bottom: 2px solid rgb(188, 177, 252);
}

footer {
  padding: 15px 0;
  background-color: rgb(71, 69, 69);
}
</style>
