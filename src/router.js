import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import MeituHome from '@/page/meitu/MeituHome'
import TorrentHome from '@/page/torrent/TorrentHome'
import VideoHome from '@/page/video/VideoHome'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/',  name: '主页',  component: Home},
    { path: '/home',  name: '主页',  component: Home},
    { path: '/torrent',  name: '发现种子',  component: TorrentHome},
    { path: '/meitu',  name: '美图欣赏',  component: MeituHome},
    { path: '/video',  name: '影视中心',  component: VideoHome}
  ]
})