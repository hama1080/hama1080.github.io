<template>
  <div>
    <el-row>
      <el-col :span="20" :offset="2">

        <el-card>
          <el-row>
            <el-col :span="24">
              <h2>DigitalClock</h2>
              <h3>2013</h3>

              <!-- Description -->
              <div>
                Arduinoと7セグメントLEDを用いたデジタル時計．
              </div>

              <!-- Screen shots -->
              <el-carousel trigger="click" indicator-position="outside" :autoplay=false>
                <el-carousel-item>
                  <img src="/static/works/digitalClock/figure0.png">
                </el-carousel-item>
                <el-carousel-item>
                  <img src="/static/works/digitalClock/figure1.png">
                </el-carousel-item>
                <el-carousel-item>
                  <img src="/static/works/digitalClock/figure2.png">
                </el-carousel-item>
              </el-carousel>

              <!-- Technologies -->
              <div>
                <span class="tech">Technologies:</span>
                <span class="tech">Arduino</span>
                <span class="tech">Dynamic Lighting System</span>
              </div>

              <div>
                <div>主な利用部品</div>
                <el-table :data="tableData" style="width: 80%; margin: 0 auto;">
                  <el-table-column align="center" prop="part_name" label="材料名"></el-table-column>
                  <el-table-column align="center" prop="model_number" label="型番"></el-table-column>
                  <el-table-column align="center" prop="usage" label="用途"></el-table-column>
                </el-table>
              </div>

              <!-- Source link -->
              <sourceLink address="https://github.com/hama903/ArduinoDigitalClock"></sourceLink>

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
