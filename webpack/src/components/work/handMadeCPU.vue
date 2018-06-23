<template>
  <div>
    <el-row>
      <el-col :span="20" :offset="2">

        <el-card>
          <el-row>
            <el-col :span="24">
              <h2>Hand Made CPU(TD4)</h2>
              <h3>2012</h3>

              <!-- Description -->
              <div>
                "CPUの創り方"に記載の4bit CPUを模倣して作成したCPU．<br>
                ディップスイッチで自由にプログラムを書き換え可能で，3分のラーメンタイマーを実行できる．
              </div>

              <!-- Screen shots -->
              <el-carousel trigger="click" indicator-position="outside" :autoplay=false>
                <el-carousel-item>
                  <img src="/static/works/handMadeCPU/figure0.jpg">
                </el-carousel-item>
                <el-carousel-item>
                  <img src="/static/works/handMadeCPU/figure1.jpg">
                </el-carousel-item>
              </el-carousel>

              <!-- Technologies -->
              <div>
                <span class="tech">Technologies:</span>
                <span class="tech">Digital Circuit</span>
              </div>

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
