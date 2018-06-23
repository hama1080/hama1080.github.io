<template>
  <div>
    <el-row>
      <el-col :span="20" :offset="2">

        <el-card>
          <el-row>
            <el-col :span="24">
              <h2>Timer Release</h2>
              <h3>2014/7</h3>

              <!-- Description -->
              <div>
                自作タイマーレリーズ
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
                <span class="tech">Arduino</span>
              </div>

              <!-- Source link -->
              <sourceLink address=""></sourceLink>

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
