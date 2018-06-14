<template>
  <div>
    <el-row>
      <el-col :span="24">
        <img src="../assets/profile_picture.jpg" style="width: 20%;"/>
        <h1>hmhm903</h1>
        <h2>Software engineer with the knowledge of hardware.</h2>
      </el-col>
    </el-row>

    <el-row gutter="20">
      <el-col :span="24">
        <el-col :span="8" align="right">
          <div class="sub-title">Skills</div>
        </el-col>
        <el-col :span="16" align="left">
          <div class="skill">C/C++</div>
          <div class="skill">Python</div>
          <div class="skill">PhysX</div>
          <div class="skill">Electronics</div>
        </el-col>
      </el-col>
    </el-row>

    <el-row gutter="20">
      <el-col :span="24">
        <el-col :span="8" align="right">
          <div class="sub-title">Social</div>
        </el-col>
        <el-col :span="16" align="left">
          <div class="social">
            <custom-icon name="github" base-class="custom-icon"></custom-icon>
            Github
          </div>
          <div class="social">
            <custom-icon name="twitter" base-class="custom-icon"></custom-icon>
            Twitter
          </div>
          <div class="social">
            <custom-icon name="instagram" base-class="custom-icon"></custom-icon>
            Instagram
          </div>
        </el-col>
      </el-col>
    </el-row>

    <el-row gutter="20">
      <el-col :span="24">
        <div class="sub-title">Recently Works</div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import customIcon from 'vue-icon/lib/vue-feather.esm.js'

export default {
  name: 'Profile',
  components: {
    customIcon
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sub-title{
  font-size: 150%;
  padding: 20px 0;
}

.skill, .social{
  float: left;
  font-size: 120%;
  margin-right: 20px;
  padding: 20px 0;
}

.v-icon,
.custom-icon {
  width: 24px;
}
</style>
