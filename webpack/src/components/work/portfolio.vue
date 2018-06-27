<template>
  <div>
    <el-row>
      <el-col :span="20" :offset="2">

        <el-card class="work-card">
          <el-row>
            <el-col :span="24">
              <h2>Portfolio</h2>
              <h3>2018/6</h3>

              <div class="description">
                    Vue.jsを利用したポートフォリオサイト．UIライブラリとしてElement UIを利用．これまでに作ったものや，撮影した写真を掲載．
              </div>

              <div class="screen-shots">
                <img src="/static/works/portfolio/figure0.png" style="max-width: 100%">
              </div>

              <div class="technologies">
                <span class="tech">Technologies:</span>
                <span class="tech">HTML/CSS</span>
                <span class="tech">Vue.js</span>
                <span class="tech">Element UI</span>
              </div>

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
.work-card{
  margin: 0 0 50px 0;
}

.description{
  text-align: left;
}
.description, .screen-shots, .description{
  margin: 30px 0;
}

.tech{
  margin: 0 5px;
}

</style>
