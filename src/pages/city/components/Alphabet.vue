<template>
  <ul class="betlist">
    <li
     class="item"
     v-for="item of letters"
     :key="item"
     :ref="item"
     @click="handleLetterClick"
     @touchstart="handleTouchStart"
     @touchmove="handleTouchMove"
     @touchend="handleTouchEnd">
      {{item}}
    </li>
  </ul>
</template>

<script>
export default{
  name: "CityAlphabet",
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  // 建一个字母表数组
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  // 避免反复获取：把获取A高度放在updated里面，cities一开始是空对象，当获取Ajax请求的时候，alphabet才能获取数据，重新渲染
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    // 点击跳转事件,通过emit传递字母给父组件
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    // 滑动跳转逻辑
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        // 防抖处理，不用节流是因为长按的时候会不断获取dom节点
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
          // 滑动顺滑点就调低点时间
        }, 8)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .betlist
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    .item
      line-height: .4rem
      text-align: center
      color: $bgColor
</style>