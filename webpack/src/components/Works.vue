<template>
  <div>

    <div v-for="(work, index) in works" :key="index">
      <el-card :body-style="{ padding: '0px' }" class="work-card">
        <img v-bind:src="work.img_src"/>
        <div>{{ work.date }}</div>
        <div>{{ work.name }}</div>
      </el-card>
    </div>
 
  </div>
</template>

<script>
export default {
  name: 'Works',
  data () {
    return {
      works: [
        {
          date: '2018/6',
          name: 'ポートフォリオサイト',
          img_src: '/static/logo.png'
        },
        {
          date: '2018/3',
          name: 'ひらがなGAN',
          img_src: '/static/logo.png'
        },
        {
          date: '2017/10',
          name: 'ビットコイン価格表示装置',
          img_src: '/static/logo.png'
        },
        {
          date: '2017/3',
          name: 'HexMan2',
          img_src: '/static/logo.png'
        },
        {
          date: '2016/3',
          name: 'HexMan',
          img_src: '/static/logo.png'
        },
        {
          date: '2014/12',
          name: 'Raspberry Pi Server',
          img_src: '/static/logo.png'
        },
        {
          date: '2014/7',
          name: 'タイマーレリーズ',
          img_src: '/static/logo.png'
        },
        {
          date: '2013',
          name: '7セグデジタル時計',
          img_src: '/static/logo.png'
        },
        {
          date: '2012',
          name: '4bit CPU',
          img_src: '/static/logo.png'
        },
        {
          date: '2012',
          name: 'ファイルビューワメディアアート',
          img_src: '/static/logo.png'
        },
        {
          date: '2011',
          name: 'リバーシ',
          img_src: '/static/logo.png'
        }
      ]
    }
  }

}
</script>

<style scoped>
.work-card{
  width: 250px;
  margin: 30px;
  float: left;
}
</style>
