<template>
  <div>
    <el-row>
      <el-col :span="20" :offset="2">

        <el-card>
          <el-row>
            <el-col :span="24">
              <h2>Portfolio(2018/6)</h2>

              <div>Vue.jsを利用したポートフォリオサイト</div>

              <!--Screen shots-->
              <div></div>

              <div>
                <span class="tech">Technologies:</span>
                <span class="tech">HTML/CSS</span>
                <span class="tech">Vue.js</span>
              </div>

              <el-row>
                <el-col :offset="18" :span="6">
                  <a href="https://github.com/hama903/hama903.github.io">
                    <el-button plain class="source-link">
                      <custom-icon name="github" base-class="custom-icon"></custom-icon>
                      <div class="source-text">Source</div>
                    </el-button>
                  </a>
                </el-col>
              </el-row>

            </el-col>
          </el-row>

        </el-card>

      </el-col>
    </el-row>
  </div>
</template>

<script>
import customIcon from 'vue-icon/lib/vue-feather.esm.js'

export default {
  name: 'portfolio',
  components: {
    customIcon
  }
}
</script>

<style scoped>

.source-link{
  font-size: 120%;
  padding: 5px 10px;
  margin: 15px;
}

.v-icon,
.custom-icon {
  width: 20px;
}

.tech{
  margin: 0 5px;
}

</style>
