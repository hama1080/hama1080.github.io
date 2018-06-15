<template>
  <div>

    <div v-for="(work, index) in works_history" :key="index">
      <h2>{{ work.year }}</h2>
      <el-row>
        <el-col :span="6" v-for="(o, index) in work.details" :key="index" :offset="(index % 3) === 0 ? 1 : 2" >
          <el-card>
            <img v-bind:src="o.img_src"/>
            {{ o.name }}
          </el-card>
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Works',
  data () {
    return {
      works_history: [
        {
          year: 2018,
          details: [
            {
              name: 'ポートフォリオサイト',
              img_src: '/static/logo.png'
            },
            {
              name: 'ひらがなGAN',
              img_src: '/static/logo.png'
            }
          ]
        },
        {
          year: 2017,
          details: [
            {
              name: 'ビットコイン価格表示装置',
              img_src: '/static/logo.png'
            },
            {
              name: 'HexMan2',
              img_src: '/static/logo.png'
            }
          ]
        },
        {
          year: 2016,
          details: [
            {
              name: 'HexMan',
              img_src: '/static/logo.png'
            }
          ]
        },
        {
          year: 2014,
          details: [
            {
              name: 'タイマーレリーズ',
              img_src: '/static/logo.png'
            }
          ]
        },
        {
          year: 2014,
          details: [
            {
              name: 'Raspberry Pi Server',
              img_src: '/static/logo.png'
            }
          ]
        },
        {
          year: 2013,
          details: [
            {
              name: '7セグデジタル時計',
              img_src: '/static/logo.png'
            }
          ]
        },
        {
          year: 2012,
          details: [
            {
              name: '4bit CPU',
              img_src: '/static/logo.png'
            },
            {
              name: 'メディアアートファイルビューワ',
              img_src: '/static/logo.png'
            }
          ]
        },
        {
          year: 2012,
          details: [
            {
              name: 'リバーシ',
              img_src: '/static/logo.png'
            }
          ]
        }
      ]
    }
  }

}
</script>

<style scoped>

</style>
