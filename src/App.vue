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
//  async mounted() {
//    const {data, status} = await api.getList()
//    console.log(status)
//  },
  mounted(){
    this.$store.dispatch('req_list')
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
