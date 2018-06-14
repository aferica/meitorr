<template>
  <div id="app">
    <HomeHeader :class="styleName"/>
    <div class="content">
      <router-view></router-view>
    </div>
    <div :class="footerName">
      <div class="short-info">欢迎使用meitorr！</div>
      <div class="copyright">©CopyRight 2006-2018 aferica Inc All Rights Reserved.</div>
    </div>
  </div>
</template>

<script>
import HomeHeader from './components/HomeHeader.vue'

export default {
  name: 'app',
  components: {
    HomeHeader
  },
  data () {
    return {
      styleName:'home-header',
      footerName: 'home-footer'
    }
  },
  mounted () {
    // console.log(this.$route)
    if(this.$route.path != '/' && this.$route.path != '/home') {
      this.styleName = 'other-header'
      this.footerName = 'other-footer'
    }
  },
  watch:{
    $route(to){
      // console.log(to.path);
      // console.log(form.path);
      if(to.path == '/home' || to.path == '/') {
        this.styleName = 'home-header'
        this.footerName = 'home-footer'
      } else {
        this.styleName = 'other-header'
        this.footerName = 'other-footer'
      }
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.home-header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  /* opacity: 0.4; */
  /* background-color:rgba(0,0,0,0.3); */
  z-index: 1000;
}

.other-footer {
  position: relative;
}

.content {
  min-height: calc(100vh - 180px)
}
.home-footer {
  /* margin-top: 40px; */
  height: 80px;
  width: 100%;
  background-color: rgba(220,229,239,0.9);
}
.other-footer {
  margin-top: 40px;
  height: 80px;
  width: 100%;
  background-color: rgba(220,229,239,0.9);
}
.short-info {
  padding-top: 20px;
}
</style>
