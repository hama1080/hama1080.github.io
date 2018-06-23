<template>
  <div>
    <el-row>
      <el-col :span="20" :offset="2">

        <el-card>
          <el-row>
            <el-col :span="24">
              <h2>Bitcoin Price Checker</h2>
              <h3>2018/3</h3>

              <!-- Description -->
              <div>
                ビットコイン価格を表示する機器
              </div>

              <!-- Screen shots -->
              <el-carousel trigger="click" indicator-position="outside" :autoplay=false>
                <el-carousel-item>
                  <img src="/static/works/bitcoinPriceChecker/appearance.png">
                </el-carousel-item>
              </el-carousel>

              <!-- Technologies -->
              <div>
                <span class="tech">Technologies:</span>
                <span class="tech">Python</span>
                <span class="tech">Raspberry Pi Zero W</span>
                <span class="tech">Dynamic Lighting System</span>
              </div>

              <!-- Source link -->
              <sourceLink address="https://github.com/hama903/PiBitcoinPriceChecker"></sourceLink>

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
  name: 'portfolio',
  components: {
    sourceLink
  }
}
</script>

<style scoped>

.tech{
  margin: 0 5px;
}

</style>
