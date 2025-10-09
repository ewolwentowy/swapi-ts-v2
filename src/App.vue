<script setup lang="ts">
import {RouterView} from 'vue-router'
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <Navbar/>
    </div>
  </header>

  <RouterView/>
  <footer>
    <p class="bg-dark">&copy 2025 || Design By Mateusz</p>
  </footer>
</template>

<style scoped>
footer {
	height: 70px;
	text-align: center;
	line-height: 70px;
	font-size: 20px;
	color: rgb(235, 203, 25);
}
</style>
