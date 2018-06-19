<template>
  <div>
    <el-row>
      <el-col :span="20" :offset="2">

        <el-card>
          <el-row>
            <el-col :span="24">
              <h2>Portfolio</h2>
              <h3>2018/6</h3>

              <!-- Description -->
              <div>
                Vue.jsを利用したポートフォリオサイト
              </div>

              <!-- Screen shots -->
              <el-carousel trigger="click" indicator-position="outside" :autoplay=false>
                <el-carousel-item>
                  <img src="../../assets/works/portfolio/screenshot.png">
                </el-carousel-item>
              </el-carousel>

              <!-- Technologies -->
              <div>
                <span class="tech">Technologies:</span>
                <span class="tech">HTML/CSS</span>
                <span class="tech">Vue.js</span>
              </div>

              <!-- Source link -->
              <sourceLink address="https://github.com/hama903/hama903.github.io"></sourceLink>

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
