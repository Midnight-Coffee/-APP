# Qunar-APP-demo

### vue-cli 4.0 该项目不再更新。

<h3>一、前言</h3>

&nbsp;&nbsp;这是一个仿去哪儿网的VUE项目，主要由三个页面组成：主页，城市搜索页面，旅游详细页面组成。

&nbsp;&nbsp;1.通过组件化思维，构建页面；运用stylus进行CSS样式处理；

&nbsp;&nbsp;2.通过vue-router实现页面跳转和动态路由；

&nbsp;&nbsp;3.通过Axios实现网络请求；通过转发机制复写请求路径，实现无后端ajax请求；

&nbsp;&nbsp;4.通过better-scroll和swiper插件引入实现页面滚动和图片轮播效果；

&nbsp;&nbsp;5.通过vuex实现组件共同数据管理以及非父子组件的数据传递；通过localStorage实现本地存储；

&nbsp;&nbsp;6.通过keep-alive实现数据缓存，减少网络请求；通过activated生命周期钩子解决组件异常问题；

<hr/><h3>二、仿去哪儿网app</h3>

<b>主要由三个页面组成：主页，城市搜索页面，旅游详细页面组成。</b>

主页：大致模块五个，header、swiper、icons、recommends、weekend。主要功能，页面间的切换(<b>城市→城市搜索页面、热销推荐→旅游详细页面</b>)，轮播图组件，动态路由，公共数据、状态管理。

城市搜索页面：大致模块四个，header、search、list、alphabet。主要功能，搜索关键字提示功能，页面间的切换(选择城市后回到主页)，字母表跳转功能（点击字母跳转导航，滑动字母跳转导航），better-scroll组件，公共数据、状态管理。

旅游详细页面：大致模块四个，banner、gallary、header、list。主要功能，画廊功能，滑动时头部渐隐渐现效果，页面间的切换(点击返回后回到主页)，轮播图组件，动态路由，价目表递归组件。

<b>另外还进行了性能优化和可维护性提高。</b>

性能优化：keep-alive实现数据缓存，减少网络请求；搜索栏的防抖，字母表滑动时节流；

可维护性：一些可复用的样式储存（主题颜色，文字省略等），一些可复用的组件/插件储存（画廊组件，渐隐渐现组件）

<b>完成这个项目可以体验到：</b>
	
  - vue-cli 的环境搭建，项目目录。
  - 学习组件化、模块化开发。
  - 学习 vue 全家桶：vue-router 路由、vuex 状态管理。
  - 了解性能优化的方法。
  
<hr/><h3>三、技术栈</h3>

	vue.js + vue-cli + vue-router + vuex 


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run serve

```
