<template>
  <div class="wrapper">
    <swiper :options="swiperOptions" v-if="showSwiper">
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
	name: 'HomeSwiper',
  props: {
    list: Array
  },
	data () {
		return {
      //轮播组件配置
			swiperOptions: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3000,
        autoplayDisableOnInteraction : false
      }
		}
	},
  computed: {
    //默认图不是第一张的问题
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active   //用穿透符修改第三方组件样式
  background: #fff
.wrapper
  height: 0
  width: 100%
  overflow: hidden
  padding-bottom: 31.25%
  background: #eee
  .swiper-img
    width: 100%
</style>