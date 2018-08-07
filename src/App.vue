<template>
  <div id="app">
    <!-- 标题 -->
    <h1><strong>{{ msg }}</strong></h1>
    <hr />

    <!-- 导航 -->
    <ul>
      <li v-for='(item,index) in rounterLink'>
        <router-link :to='item.to'>{{item.name}}</router-link>
      </li>
    </ul>

    <!-- 内容 -->
    <div>
      <transition enter-active-class='animated zoomInLeft' leave-active-class='animated zoomOutRight'>
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      rounterLink : [{
        to : '/home',
        name : '主页'
      },{
        to : '/news',
        name : '新闻'
      }],
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
