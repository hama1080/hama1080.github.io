<template>
  <div>
    <el-row>
      <el-col span="20" offset="2">

        <el-card>
          <el-row>
            <el-col span="24">
              <h2>Portfolio(2018/6)</h2>

              <div>Vue.jsを利用したポートフォリオサイト</div>

              <!--Screen shots-->
              <div></div>

              <div>
                <span class="tech">Technologies:</span>
                <span class="tech">HTML/CSS</span>
                <span class="tech">Vue.js</span>
              </div>

              <div><custom-icon name="github" base-class="custom-icon"></custom-icon>Source(Github)</div>
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
.v-icon,
.custom-icon {
  width: 24px;
}

.tech{
  margin: 0 5px;
}

</style>
