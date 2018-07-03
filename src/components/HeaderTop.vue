<template>
  <div class="header">
    <slot name="left" class="left"></slot>
    <span class="center">
      {{title}}
    </span>
    <slot name="right" class="right"></slot>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data(){
    return {}
  },
  methods: {},
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scope>
  @import "../common/stylus/mixin.styl"
.header
  height: 40px
  line-height: 40px
  background-color: $green
  padding: 0 10px
  position: relative
  .left
    float: left
  .right
    float: right
  .center
    position absolute
    width: 60%
    top 50%
    left 50%
    transform translate(-50%, -50%)
    display: inline-block
    text-align: center
    overflow: hidden
    white-space: nowrap
    text-overflow: ellipsis

</style>
