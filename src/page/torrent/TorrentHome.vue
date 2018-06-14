<template>
  <div class="torrent-home">
    <!-- <router-link to="main" tag="span">
    </router-link> -->
    <div class="search-bar">
      <el-row>
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        <el-button type="primary" :loading="loading" @click="getTorrentResult">搜索</el-button>
      </el-row>
    </div>

    <h5 v-if="showErro" style="text-align:center">抱歉，是我太笨了,没有找到相关资源！</h5>
    <div style="padding: 40px;">
      <div class="torrent" v-for="torr in result" :key="torr.hash" >
        <el-row>
          <el-col  :span="20">
            <div>
              <span class="torrent-name">{{torr.name}}</span>
              <span class="torrent-size">{{torr.size}}</span>
            </div>
            <el-row  style="margin-top: 10px;">
              <el-col :span="6" class="torrent-date">日期：{{torr.date}}</el-col>
              <el-col :span="18" class="torrent-magnet"><i class="el-icon-document"></i>  {{torr.magnet}}</el-col>
            </el-row>
          </el-col>
          <el-col :span="4">
            <el-button class="copy-magnet-button" type="success" @click="copyMagentUrl(torr.magnet)">复制磁力</el-button>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="next-page-button">
      <el-button v-if="hasNext" type="primary"  :loading="loading" plain @click="getNextPage">查看更多</el-button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'TorrentHome',
  data () {
    return {
      input: '',
      result: [],
      hasData: false,
      loading: false,
      showErro: false,
      hasNext: false,
      currentPage: 1,
    }
  },
  mounted() {
    // this.getHomeInfo()
  },
  methods: {
    getTorrentResult() {
      // console.log(this.input)
      if(this.input == '' || this.input == ' ') {
        this.$notify({
          title: '警告',
          message: '查询内容不能为空，请输入！',
          type: 'warning'
        });
        return;
      }
      this.loading = true
      let url = 'http://10.30.4.181:3000/api/btso/torrent/' + this.input
      if(this.currentPage > 1) {
        url += '?page=' + this.currentPage
      }
      axios.get(url).then(res => {
        console.log(res.data)
        if(res.data.code == 0) {
          if(res.data.data.length > 0) {
            this.hasNext = res.data.data.length == 30 ? true : false
            this.showErro = false
            this.result =  this.result.concat(res.data.data)
            this.hasData = true
          } else {
            this.showErro = true
            // this.result = []
          }
          this.loading = false
        }
      })
    },

    getNextPage() {
      this.currentPage += 1
      this.getTorrentResult()
    },

    copyMagentUrl(magnet) {
      let that = this
      this.$copyText(magnet).then(function () {
        that.$notify.success({
          title: '复制成功',
        });
      }, function () {
        that.$notify.error({
          title: '复制失败，请重试'
        });
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .torrent-home{
    text-align: left;
    width: 80%;
    padding-left: 10%;
    padding-right: 10%;
  }

  .search-bar {
    height: 40px;
    padding-top: 40px;
    padding-left: 40px;
  }
  
  .el-input {
    width: 40%;
  }
  .el-button {
    margin-left: 4%;
  }

  .torrent {
    padding: 10px 0;
    border-top:1px solid #eee;    
  }

  .torrent-name {
    font-size: 24px;
    font-weight: bold;
    color:#87CEEB;
  }

  .torrent-size {
    padding-left: 10px;
    font-size: 12px;
  }
  .torrent-date {
    color: #81a235;
  }

  .torrent-magnet {
    color: #d7685a;
  }

  .next-page-button {
    text-align: center;
  }

  .copy-magnet-button { 
    margin: 12px;
  }
</style>
