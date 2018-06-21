<template>
  <div>
    <div v-for="(work, index) in works" :key="index">
      <router-link v-bind:to="work.detail_path">
        <el-card :body-style="{ padding: '0px' }" class="work-card">
          <img v-bind:src="work.img_src"/>
          <div class="card-text">
            <div class="work-title">{{ work.name }}</div>
            <div class="work-date"><custom-icon name="calendar" base-class="custom-icon"></custom-icon>{{ work.date }}</div>
          </div>
        </el-card>
      </router-link>
    </div>

  </div>
</template>

<script>
import customIcon from 'vue-icon/lib/vue-feather.esm.js'

export default {
  name: 'Works',
  components: {
    customIcon
  },
  data () {
    return {
      works: [
        {
          date: '2018/6',
          name: 'ポートフォリオサイト',
          img_src: '/static/works/portfolio/eyecatch.png',
          detail_path: 'work/portfolio'
        },
        {
          date: '2018/3',
          name: 'ひらがなGAN',
          img_src: '/static/works/hiraganaGAN/eyecatch.png',
          detail_path: 'work/hiraganaGAN'
        },
        {
          date: '2017/10',
          name: 'Bitcoin Price Checker',
          img_src: '/static/works/bitcoinPriceChecker/eyecatch.png',
          detail_path: 'work/portfolio'
        },
        {
          date: '2017/3',
          name: 'HexMan2',
          img_src: '/static/logo.png',
          detail_path: 'work/portfolio'
        },
        {
          date: '2016/3',
          name: 'HexMan',
          img_src: '/static/logo.png',
          detail_path: 'work/portfolio'
        },
        {
          date: '2014/12',
          name: 'Raspberry Pi Server',
          img_src: '/static/logo.png',
          detail_path: 'work/portfolio'
        },
        {
          date: '2014/7',
          name: 'タイマーレリーズ',
          img_src: '/static/logo.png',
          detail_path: 'work/portfolio'
        },
        {
          date: '2013',
          name: '7セグデジタル時計',
          img_src: '/static/logo.png',
          detail_path: 'work/portfolio'
        },
        {
          date: '2012',
          name: '4bit CPU',
          img_src: '/static/logo.png',
          detail_path: 'work/portfolio'
        },
        {
          date: '2012',
          name: 'File Viewer',
          img_src: '/static/logo.png',
          detail_path: 'work/portfolio'
        },
        {
          date: '2011',
          name: 'リバーシ',
          img_src: '/static/logo.png',
          detail_path: 'work/portfolio'
        }
      ]
    }
  }

}
</script>

<style scoped>
.work-card{
  width: 250px;
  height: 280px;
  margin: 30px;
  padding-top: 20px;
  float: left;
}

.card-text{
  padding: 20px;
}
.work-title{
  font-size: 120%;
  font-weight: bold;
}
.v-icon,
.custom-icon {
  width: 14px;
  margin: 4px 4px 0 0;
}
.work-date{
  text-align: right;
  color: #AAA;
}
</style>
