<template>
<div>
  <el-menu :default-active="activeIndex" class="el-menu-demo" :router="true" mode="horizontal" @select="handleSelect"
    text-color="#303133" active-text-color="#409EFF">
    <el-menu-item index="home" style="width: 60%; border-bottom: none;">
      <div class="logo">meitorr</div>
    </el-menu-item>
    <el-menu-item index="torrent">发现资源</el-menu-item>
    <el-menu-item index="meitu">美图欣赏</el-menu-item>
    <el-menu-item index="video">影视中心</el-menu-item>
  </el-menu>
</div>
</template>


<script>
export default {
  name: 'HomeHeader',
  props: {
    msg: String
  },
  data() {
    return {
      activeIndex: 'home',
    };
  },
  mounted () {
    // console.log(this.$route)
    let activePath = this.$route.path.slice(1)
    if(activePath != null && activePath != '') {
      this.activeIndex = activePath
    }
  },
  methods: {
    handleSelect() {
      // console.log(key, keyPath);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo{
  height: 100%;
  text-align: left;
  padding-left: 20%;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Helvetica, Verdana, sans-serif;
  font-size: 28px !important;
  font-weight: bolder;
}
</style>