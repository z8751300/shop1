<template>
  <div class="profile">
    <header-top :title="'个人中心'"></header-top>
    <router-link  to="/login">login</router-link>
  </div>

</template>

<script type="text/ecmascript-6">
  import HeaderTop from '../../components/HeaderTop.vue'
export default {
  data(){
    return {}
  },
  methods: {},
  components: {
    HeaderTop,
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scope>

</style>
