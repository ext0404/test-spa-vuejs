<template>
  <div id="app">
    <div id="left">
      <left />
    </div>  

      <support />
      <!-- <Home/>
      <router-view/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import left from './components/left.vue'
import support from './components/support.vue'

export default {
  name: 'app',
  components: {
     left,  support
  }
}
</script>

<style>
body{
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  margin: 0;
}
</style>
