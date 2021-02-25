<template>
  <div>
    <div class="search">
      <!-- 双向绑定输入值，储存在keyword里面 -->
        <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音" ref="wordinput"/>
    </div>
    <!-- 提示栏根据有没有输入值显示 -->
    <div
      class="search-content"
      ref="search"
      v-show="keyword"
    >
      <ul>
        <li
          class="search-item border-bottom"
          v-for="item of list"
          :key="item.id"
          @click="handleCityClick(item.name)"
        >
          {{item.name}}
        </li>
        <!-- 没有匹配值显示提示 -->
        <li class="search-item border-bottom" v-show="hasNoData">
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default{
  name: "CitySearch",
  props: {
    cities: Object
  },  
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },

  // 侦听双向绑定的输入值变化，执行关键字搜索逻辑
  watch: {
    keyword () {
      // 做了防抖处理
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      // 需要一个新的数组去装符合关键字的城市
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          // 遍历城市数据，用indexof查询
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 ||
             value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },

  // 没有匹配值显示提示
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  methods: {
    handleCityClick (city) {
      this.changeCity(city)   //把获取到city值传到vuex的mutation里面
      this.$router.push('/')  //编程式导航
      this.keyword = ""  
    },
    //把名字叫changeCity的mutation映射到组件里面一个叫changeCity的方法里
    ...mapMutations(['changeCity'])
  },
  mounted () {
    // 引入better-scroll，需要获取指定dom元素
    this.scroll = new Bscroll(this.$refs.search, {
      click: true
    })
  },
  // 解决better-scroll无法滑动问题
  updated () {
    this.scroll.refresh()
  },
  // 解决keep-alive导致better-scroll无法滑动问题
  activated () {
    this.scroll.refresh()
  }
}
</script>

<style lang="stylus" scpoed>
  @import '~styles/varibles.styl'
  .search
    height: .72rem
    padding: 0 .1rem
    background: $bgColor
    .search-input
      box-sizing: border-box
      width: 100%
      height: .62rem
      padding: 0 .1rem
      line-height: .62rem
      text-align: center
      border-radius: .06rem
      color: #666
  .search-content
    z-index: 1
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    background: #eee
    .search-item
      line-height: .62rem
      padding-left: .2rem
      background: #fff
      color: #666
</style>