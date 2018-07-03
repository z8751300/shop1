<template>
  <div class="test border-1px">
    test
    <div class="test1 border-1px">
      test1
    </div>
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
.test
  bottom-border-1px(#333)
  .test1
    top-border-1px(#333)


</style>
