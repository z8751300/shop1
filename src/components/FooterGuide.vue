<template>
  <div class="footer-guide" v-show="$route.meta.showFooter">
    <div class="wrapper border-1px">
      <ul class="footer-wrapper">
      <router-link to="/msite" tag="li" class="router-item">
        <span class="iconfont icon-u"></span>
        <span class="text">msite</span>
      </router-link>
      <router-link to="/order" tag="li" class="router-item">
        <span class="iconfont icon-ordernumber"></span>
        <span class="text">order</span>
      </router-link>
      <router-link to="/search" tag="li" class="router-item">
        <span class="iconfont icon-search"></span>
        <span class="text">search</span>
      </router-link>
      <router-link to="/profile" tag="li" class="router-item">
        <span class="iconfont icon-profilenocircle2x"></span>
        <span class="text">profile</span>
      </router-link>
    </ul>
    </div>
    <!--<span class="iconfont icon-u"></span>-->
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data(){
    return {}
  },
  methods: {},
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scope>
  @import "../common/stylus/mixin.styl"
.footer-guide
  position: absolute
  left: 0
  bottom: 0
  width: 100%
  height: 50px
  background: $bc
  .wrapper
    top-border-1px(#666)
    .footer-wrapper
      line-heigth: 50px
      height: 50px
      display: flex
      flex-wrap: nowrap
      .router-item
        flex: 1
        text-align: center
        display: flex
        flex-direction: column
        justify-content: center
        .iconfont
          margin-bottom: 5px
        &.router-link-active
          color: $green
</style>
