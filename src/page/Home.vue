<template>
  <div class="home">
    <!-- <router-link to="main" tag="span">
    </router-link> -->
    <img class="home-bg"  src="https://bing.ioliu.cn/v1?w=1920&h=1080">
    <div class="search-bar">
      <el-input placeholder="请输入内容" v-model="inputValue" class="input-with-select">
        <el-select v-model="searchType" slot="prepend" placeholder="请选择">
          <el-option label="资源" value="torrent"></el-option>
          <el-option label="美图" value="meitu"></el-option>
          <el-option label="影视" value="video"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Home',
  data () {
    return {
      inputValue: '',
      searchType: null,
      input5: '',
      select: ''
    }
  },
  mounted() {
    // this.getHomeInfo()
  },
  methods: {
    getHomeInfo() {
      let url = 'http://127.0.0.1:3000/api/other/meitulu/site'
      axios.get(url).then(res => {
        console.log(res.data)
        if(res.data.code == 0) {
          this.homeData = res.data.data
        }
      })
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home{
    text-align: left;
  }
  
  .home-bg {
    width: 100%;
    vertical-align:middle; 
  }

  .search-bar {
    position: absolute;
    top: 40%;
    left: 30%;
    right: 30%;
    width: 40%;
    margin: auto;
  }

  .el-select {
    width: 100px;
  }

  .el-input__inner {
    color: #000;
  }
  .el-input-group__append, .el-input-group__prepend {
    color: #000;
  }
</style>
