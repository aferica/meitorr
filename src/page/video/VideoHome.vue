<template>
  <div class="video-home">
    <!-- <router-link to="main" tag="span">
    </router-link> -->
    <div style="padding-top: 10px;">
      <el-carousel :interval="5000">
        <el-carousel-item v-for="item in carData" :key="item.index">
          <img class="carousel-img" :src="item.img" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="main">
      <div class="meinv">
        <h4>热门美女</h4>
        <el-row>
          <el-col style="padding:4px;" :span="2" v-for="meinv in homeData.meinv" :key="meinv.index" :offset="0">
            <el-card :body-style="{ padding: '0px' }">
              <img :src="imgUrl + meinv.href" class="image">
              <div>
                <span class="meinv-name">{{meinv.name}}</span>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
      <div class="hot">
        <h4>精选美图</h4>
        <el-row>
          <el-col style="padding:4px;" :span="6" v-for="hot in homeData.hot" :key="hot.no" :offset="0">
            <el-card :body-style="{ padding: '0px' }">
              <img :src="imgUrl + hot.cover">
              <div>
                <span class="hot-name">{{hot.title}}</span>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
      <div class="latest">
        <h4>最新发布</h4>
        <el-row>
          <el-col style="padding:4px;" :span="6" v-for="latest in homeData.latest" :key="latest.no" :offset="0">
            <el-card :body-style="{ padding: '0px' }">
              <img :src="imgUrl + latest.cover">
              <div>
                <span class="hot-name">{{latest.title}}</span>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
      <div class="site-tag">
        <h4>名站写真</h4>
        <el-row>
          <el-col style="width: 14%; " v-for="site in homeData.site" :key="site.index">
            <span class="hot-name">{{site.name}}</span>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'VideoHome',
  data () {
    return {
      imgUrl: 'http://127.0.0.1:3000/api/other/meitulu/getimg?url=',
      carData: [
        {index: 1, img: 'http://127.0.0.1:3000/api/other/meitulu/getimg?url=https://mtl.ttsqgs.com/pic/4044.jpg'},
        {index: 2, img: 'http://127.0.0.1:3000/api/other/meitulu/getimg?url=https://mtl.ttsqgs.com/pic/3583.jpg'},
        {index: 3, img: 'http://127.0.0.1:3000/api/other/meitulu/getimg?url=https://mtl.ttsqgs.com/pic/4514.jpg'},
        {index: 4, img: 'http://127.0.0.1:3000/api/other/meitulu/getimg?url=https://mtl.ttsqgs.com/pic/224.jpg'},
      ],
      homeData: {
        meinv: [],
        hot: [],
        site: [],
        tag: [],
        latest: [],
      }
    }
  },
  mounted() {
    this.getHomeInfo()
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
  .video-home{
    text-align: left;
    width: 80%;
    padding-left: 10%;
    padding-right: 10%;
  }
  
  .carousel-img {
    max-height: 100%;
    /* max-width: 100%; */
    vertical-align:middle; 
  }

  img {
    width: 100%;
    max-height: 100%;
    vertical-align:middle; 
  }
  .hot-name{
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
    width: 100%;
  }
</style>
