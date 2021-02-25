<template>
  <div class="icons">
  	<swiper :options="swiperOptions">
  	  <swiper-slide v-for="(page,index) of pages" :key="index">
	  	<div class="icon" v-for="item of page" :key="item.id">
	  	  <div class="icon-img">
	  	    <img class="icon-img-content" :src="item.imgUrl">
	  	  </div>
	  	  <p class="icon-desc">{{item.desc}}</p>
	  	</div>
	  </swiper-slide>
	</swiper>
  </div>
</template>

<script>
export default {
  name: "HomeIcons",
  props: {
    list: Array
  },
  data () {
    return {
      swiperOptions: {
        autoplay: false
      }
    }
  },
  computed: {
    //拆分8个一页，需要新建数组，8个为一个子数组
  	pages () {
  	  const pages = []
  	  this.list.forEach((item,index)=>{
  	  	const page = Math.floor(index / 8)  //向下取整获取pages索引
  	  	if (!pages[page]){
  	  	  pages[page] = []
  	  	}
  	  	pages[page].push(item)
  	  }) 
  	  return pages
  	}
  }
}
</script>

<style lang="stylus" scpoed>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons >>> .swiper-container
    width: 100%
    height: 0
    padding-bottom: 50%
    overflow: hidden
  .icon
  	overflow: hidden
  	float: left
  	width: 25%
  	height: 0
  	padding-bottom: 25%
  	position: relative
  	.icon-img
  	  position: absolute
  	  top: 0
  	  left: 0
  	  right: 0
  	  bottom: .44rem
  	  padding: .1rem
  	  border-sizing: border-box
  	  .icon-img-content
  	  	display: block
  	  	margin: 0 auto
  	  	height: 100%
  	.icon-desc
  	  position: absolute
  	  left: 0
  	  right: 0
  	  bottom: 0
  	  height: .44rem
  	  line-height: .44rem
  	  text-align: center
  	  color: $darkTextColor
  	  ellipsis()
</style>