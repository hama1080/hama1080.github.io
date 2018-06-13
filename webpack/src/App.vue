<template>
  <div style=" height: 100vh; background-color: #f5f2ed;">
    <div id="app" style="width: 1024px; margin: 0 auto; background-color: #f5f2ed;">
      <TopBar></TopBar>
      <router-view/>
    </div>
  </div>
</template>

<script>
import TopBar from '@/components/TopBar'
export default {
  name: 'App',
  components: {
    TopBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
