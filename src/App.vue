<script setup>
import TheNavigation from './components/TheNavigation.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <TheNavigation />
  
  <main>
    <router-view />
  </main>
  
  <TheFooter />
</template>

<style>
@import './assets/base.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
}

main {
  min-height: 100vh;
  width: 100%;
}

html {
  scroll-behavior: smooth;
}
</style>
