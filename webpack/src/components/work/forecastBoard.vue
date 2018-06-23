<template>
  <div>
    <el-row>
      <el-col :span="20" :offset="2">

        <el-card>
          <el-row>
            <el-col :span="24">
              <h2>お天気掲示板</h2>
              <h3>2016/11</h3>

              <!-- Description -->
              <div>
                Raspberry Piを用いて，小型液晶に天気予報を表示
              </div>

              <!-- Screen shots -->
              <el-carousel trigger="click" indicator-position="outside" :autoplay=false>
                <el-carousel-item>
                  <img src="/static/works/forecastBoard/figure0.jpg">
                </el-carousel-item>
                <el-carousel-item>
                  <img src="/static/works/forecastBoard/figure1.jpg">
                </el-carousel-item>
              </el-carousel>

              <!-- Technologies -->
              <div>
                <span class="tech">Technologies:</span>
                <span class="tech">Python</span>
                <span class="tech">Raspberry Pi</span>
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
