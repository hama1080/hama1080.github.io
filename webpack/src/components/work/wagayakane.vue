<template>
  <div>
    <el-row>
      <el-col :span="20" :offset="2">

        <el-card>
          <el-row>
            <el-col :span="24">
              <h2>我が家のあかねちゃんプロジェクト</h2>
              <h3>2017/8</h3>

              <!-- Description -->
              <div>
                友人と共に実施した，我が家のあかねちゃんプロジェクト．
                自作スマートスピーカーのようなもの．
                売り文句は，"ラズパイことraspberry piを使って音声認識やらTwitterから家電を操作できるやつを作ってみました"．
                詳細はWebページや，動画を参照．
                <a href="http://wagayakane.html.xdomain.jp/index.html">公式サイト</a>
              </div>

              <!-- Screen shots -->
              <el-carousel height="360px" trigger="click" indicator-position="outside" :autoplay=false>
                <el-carousel-item>
                  <img src="/static/works/wagayakane/figure0.png">
                </el-carousel-item>
                <el-carousel-item>
                  <script type="application/javascript" src="https://embed.nicovideo.jp/watch/sm31762094/script?w=640&h=360"></script><noscript><a href="http://www.nicovideo.jp/watch/sm31762094">【第三回ひじき祭】リモコン無しで家電を操作するやつを作ってみた</a></noscript>
                </el-carousel-item>
                <el-carousel-item>
                  <script type="application/javascript" src="https://embed.nicovideo.jp/watch/sm31852353/script?w=640&h=360"></script><noscript><a href="http://www.nicovideo.jp/watch/sm31852353">リモコン無しで家電を操作するやつを作ってみた【の解説】</a></noscript>
                </el-carousel-item>
              </el-carousel>

              <!-- Technologies -->
              <div>
                <span class="tech">Technologies:</span>
                <span class="tech">Python</span>
                <span class="tech">Raspberry Pi</span>
                <span class="tech">MMD(Miku Miku Dance)</span>
              </div>

              <!-- Source link -->
              <sourceLink address="https://github.com/hama903/WagayaNoAkaneChan"></sourceLink>

            </el-col>
          </el-row>

        </el-card>

      </el-col>
    </el-row>
  </div>
</template>

<script>
import sourceLink from './sourceLink.vue'

export default {
  name: 'digitalClock',
  components: {
    sourceLink
  },
  data () {
    return {
      tableData: [
        {
          part_name: 'マイコン',
          model_number: 'Arduino Uno(ATMega328P)',
          usage: '時計制御用'
        },
        {
          part_name: '7セグメントLED × 4',
          model_number: 'C-1001UB',
          usage: '時計表示用'
        },
        {
          part_name: 'トランジスタアレイ',
          model_number: 'TD62003AP, M54563P',
          usage: '電流増幅用'
        }
      ]
    }
  }
}
</script>

<style scoped>

.tech{
  margin: 0 5px;
}

</style>
