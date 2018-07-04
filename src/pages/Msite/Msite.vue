<template>
  <div class="msite">

    <header-top :title="title">
      <span slot="left" class="iconfont icon-search"></span>
      <span class="right iconfont icon-profilenocircle2x" slot="right"></span>
    </header-top>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">Slide 1</div>
            <div class="swiper-slide">Slide 2</div>
            <div class="swiper-slide">Slide 3</div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
    {{counter}} <br>
    <button @click="add">add</button> <br>
    <button @click="minus">minus</button>
  </div>
</template>

<script type="text/ecmascript-6">
  import HeaderTop from '../../components/HeaderTop.vue'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import {mapState, mapGetters} from 'vuex'
export default {
  data(){
    return {
      title: 'msite msite msite msite msite msite msite'
    }
  },
  methods: {
    add() {
      this.$store.dispatch('add', 3)
    },
    minus() {
      this.$store.dispatch('minus', 1)
    }
  },
  mounted() {
    var mySwiper = new Swiper ('.swiper-container', {
      direction: 'horizontal',
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      }
    })

  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['counter']),
  },
  components: {
    HeaderTop,
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scope>
.msite
  .swiper-container
    width: 100%
    height: 300px
    background-color: blue

</style>
