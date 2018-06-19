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

              <sourceLink></sourceLink>

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
