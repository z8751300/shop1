<template>
  <div id="app">
    <router-view/>
    <footer-guide></footer-guide>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide.vue'
  import * as api from './api/index'
export default {
  name: 'App',
  mounted() {

  },
  components: {
    FooterGuide,
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif;

</style>
