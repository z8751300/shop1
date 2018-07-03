<template>
  <div class="login">
    <div class="back iconfont icon-left"></div>
    <div class="title">硅谷外卖</div>
    <div class="switch">
      <span class="reg" :class="{active: select == 'reg'}"
          @click="select='reg'">
        短信登录
      </span>
      <span class="log" :class="{active: select == 'log'}"
          @click="select='log'">
        密码登录
      </span>
    </div>
    <div class="reg-form">
      <div class="phone custom-input" >
        <input type="text" :placeholder="select == 'reg' ? '手机号': '用户名'">
        <span class="get-code" v-show="select == 'reg'"
          @click="getCode">
          获取验证码
        </span>
      </div>
      <div class="code custom-input" >
        <input type="text" :placeholder="select == 'reg' ? '验证码': '密码'">
      </div>
      <div class="submit-button custom-input">
        <input type="button" :value="select == 'reg' ? '注册': '登录'" ></input>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data(){
    return {
      select: 'reg',
    }
  },
  methods: {
    getCode() {
      console.log('getCode')
    }
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scope>
  @import "../../common/stylus/mixin.styl"
.login
  padding: 0 20px 20px 20px
  .back
    font-size: 16px
    margin: 10px 10px 10px -15px
  .title
    margin: 20px auto 30px auto
    font-size: 30px
    text-align: center
    color: $green
  .switch
    text-align: center
    margin-bottom: 30px
    .reg
      margin-right: 20px
      &.active
        color: $green
        border-bottom: 1px solid $green
        padding-bottom: 3px
    .log
      &.active
        color: $green
        border-bottom: 1px solid $green
        padding-bottom: 3px
  .reg-form
    .custom-input
      width: 100%
      height: 40px
      border: 1px solid rgba(120, 120, 120, 0.6)
      border-radius: 3px
      margin-bottom: 20px
      input
        width: 100%
        height: 100%
        text-indent: 5px
        font-size: 16px

    .phone
      position: relative
      .get-code
        position: absolute
        right: 0
        top: 0
        line-height: 40px
        margin-right: 5px
        color: rgba(120,120,120, 0.5)

    .submit-button
      input
        background-color: $green
        color: #fff
</style>
